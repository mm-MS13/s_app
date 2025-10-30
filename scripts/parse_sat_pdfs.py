#!/usr/bin/env python3
import os
import re
import json
import argparse
from typing import List, Dict, Any, Optional

import pdfplumber


DEFAULT_INPUTS = [
    "ALL SAT MATH Advanced MATH Q's.pdf",
    "ALL SAT MATH Algebra Q's.pdf",
    "ALL SAT MATH Geometry and Trignometry Q's.pdf",
    "ALL SAT MATH Problem-Solving and Data analysis Q's.pdf",
]
DEFAULT_OUT = os.path.join("data", "question_bank.json")


def topic_from_filename(path: str) -> str:
    name = os.path.basename(path).lower()
    if "algebra" in name:
        return "Algebra"
    if "advanced" in name:
        return "Advanced Math"
    if "data" in name or "analysis" in name:
        return "Problem-Solving and Data Analysis"
    if "geometry" in name or "trigonometry" in name or "trig" in name:
        return "Geometry and Trigonometry"
    return os.path.splitext(os.path.basename(path))[0].replace("_", " ").title()


SQUARE_GLYPHS = ["■", "◼", "▪", "⬛", "▮", "▣"]
SQUARE_TO_LEVEL = {1: "Easy", 2: "Medium", 3: "Hard", 4: "Hard"}


def normalize_difficulty(block_text: str) -> str:
    m = re.search(r"(?i)Question\s+Difficulty\s*:\s*(Easy|Medium|Hard)\b", block_text)
    if m:
        return m.group(1).title()
    m2 = re.search(r"(?i)\bDifficulty\b.*?\b(Easy|Medium|Hard)\b", block_text, flags=re.DOTALL)
    if m2:
        return m2.group(1).title()
    square_count = 0
    for g in SQUARE_GLYPHS:
        square_count += block_text.count(g)
    if square_count > 0:
        return SQUARE_TO_LEVEL.get(min(square_count, 4), "Medium")
    return "Medium"


def extract_subtopic(block_text: str) -> str:
    m = re.search(r"(?im)^\s*Skill\s*[:\-]*\s*(.+?)\s*$", block_text)
    if m:
        return m.group(1).strip()
    skill_header = re.search(r"(?im)^\s*Skill\s*$", block_text)
    if skill_header:
        tail = block_text[skill_header.end():]
        for line in tail.splitlines():
            line = line.strip()
            if line:
                return line
    return "General"


def clean_lines(lines: List[str]) -> List[str]:
    out = []
    for ln in lines:
        s = ln.strip()
        out.append(s)
    return out


META_PREFIXES = (
    "Assessment", "Test", "Domain", "Skill", "Difficulty",
    "Question Difficulty", "ID:", "Correct Answer:", "Rationale",
)


def extract_question_text(block_text: str, qid: Optional[str]) -> str:
    lines = clean_lines(block_text.splitlines())
    start_idx = 0
    for i, ln in enumerate(lines):
        if re.search(r"(?i)^\s*Question\s+ID\b", ln):
            start_idx = i + 1
            break
    stop_idx = len(lines)
    for i in range(start_idx, len(lines)):
        if re.search(r"(?i)^\s*Correct\s+Answer\s*:\s*", lines[i]):
            stop_idx = i
            break
        if qid and re.search(rf"(?i)^\s*ID\s*:?\s*{re.escape(qid)}\s+Answer\b", lines[i]):
            stop_idx = i
            break
        if re.search(r"(?i)^\s*Rationale\b", lines[i]):
            stop_idx = i
            break
    q_lines = []
    for ln in lines[start_idx:stop_idx]:
        if not ln:
            q_lines.append(ln)
            continue
        if (not q_lines) and any(ln.startswith(p) for p in META_PREFIXES):
            continue
        q_lines.append(ln)
    text = "\n".join(q_lines).strip()
    return text


def extract_answer(block_text: str) -> Optional[str]:
    m = re.search(r"(?im)^\s*Correct\s*Answer\s*:\s*(.+?)\s*$", block_text)
    if m:
        return m.group(1).strip()
    return None


def extract_explanation(block_text: str) -> str:
    m = re.search(r"(?im)^\s*Rationale\s*$", block_text)
    if not m:
        m2 = re.search(r"(?is)Correct\s*Answer\s*:.*?\n(.*)$", block_text)
        return (m2.group(1).strip() if m2 else "").strip()
    return block_text[m.end():].strip()


def extract_qid(header_line: str) -> Optional[str]:
    m = re.search(r"(?i)Question\s+ID\s*[: ]\s*([A-Za-z0-9_-]+)", header_line)
    if m:
        return m.group(1).strip()
    toks = header_line.strip().split()
    if toks:
        cand = toks[-1]
        if re.match(r"^[A-Za-z0-9_-]+$", cand):
            return cand
    return None


def chunk_questions(doc_text: str) -> List[str]:
    starts = list(re.finditer(r"(?im)^\s*Question\s+ID\b.*$", doc_text))
    chunks = []
    for i, m in enumerate(starts):
        s = m.start()
        e = starts[i + 1].start() if i + 1 < len(starts) else len(doc_text)
        chunks.append(doc_text[s:e].strip())
    return chunks


def parse_pdf(path: str) -> List[Dict[str, Any]]:
    topic = topic_from_filename(path)
    text_parts = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            t = page.extract_text() or ""
            text_parts.append(t)
    full_text = "\n".join(text_parts)
    blocks = chunk_questions(full_text)
    out: List[Dict[str, Any]] = []
    for b in blocks:
        first_line = b.splitlines()[0] if b.splitlines() else ""
        qid = extract_qid(first_line) or ""
        subtopic = extract_subtopic(b)
        difficulty = normalize_difficulty(b)
        question_text = extract_question_text(b, qid)
        answer = extract_answer(b) or ""
        explanation = extract_explanation(b)
        obj = {
            "id": qid if qid else "",
            "topic": topic,
            "subtopic": subtopic if subtopic else "General",
            "difficulty": difficulty if difficulty else "Medium",
            "question_type": "multiple_choice",
            "question": question_text if question_text else "",
            "options": None,
            "answer": answer,
            "explanation": explanation,
            "source": "SAT",
        }
        out.append(obj)
    return out


def validate_entries(items: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    valid: List[Dict[str, Any]] = []
    bad = 0
    for it in items:
        if it.get("id") and it.get("question"):
            valid.append(it)
        else:
            bad += 1
    if bad:
        print(f"[warn] Skipped {bad} entries with empty id or question (adjust regex if needed).")
    return valid


def main():
    parser = argparse.ArgumentParser(description="Parse SAT Math PDFs into a JSON question bank.")
    parser.add_argument("--inputs", nargs="*", default=DEFAULT_INPUTS, help="Input PDF paths")
    parser.add_argument("--out", default=DEFAULT_OUT, help="Output JSON path")
    args = parser.parse_args()

    all_items: List[Dict[str, Any]] = []

    missing = [p for p in args.inputs if not os.path.exists(p)]
    if missing:
        print(f"[warn] Missing inputs: {missing}")

    for p in args.inputs:
        if not os.path.exists(p):
            continue
        print(f"[info] Parsing {p} ...")
        items = parse_pdf(p)
        all_items.extend(items)

    all_items = validate_entries(all_items)
    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(all_items, f, ensure_ascii=False, indent=2)
    print(f"[ok] Wrote {len(all_items)} questions -> {args.out}")


if __name__ == "__main__":
    main()


