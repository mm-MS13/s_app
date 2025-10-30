import json
from pathlib import Path
from typing import List, Dict, Any
from supabase import Client
from supabase_client import get_supabase_client

ROOT = Path(__file__).resolve().parents[2]
DATA_FILE = ROOT / "data" / "question_bank.json"

def load_questions() -> List[Dict[str, Any]]:
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise ValueError("question_bank.json must be a JSON array")
    return data

def normalize(q: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "id": q.get("id") or q.get("question_id") or q.get("slug"),
        "topic": q.get("topic"),
        "subtopic": q.get("subtopic"),
        "difficulty": q.get("difficulty"),
        "question_type": q.get("question_type") or q.get("type"),
        "question": q.get("question"),
        "options": q.get("options"),
        "answer": q.get("answer"),
        "explanation": q.get("explanation"),
        "hint": q.get("hint"),
        "source": q.get("source"),
    }

def upsert_questions(client: Client, rows: List[Dict[str, Any]], chunk_size: int = 500):
    table = client.table("questions")
    for i in range(0, len(rows), chunk_size):
        chunk = rows[i:i+chunk_size]
        table.upsert(chunk, on_conflict="id").execute()

def main():
    client = get_supabase_client()
    rows = [normalize(q) for q in load_questions()]
    rows = [r for r in rows if r.get("id") and r.get("question")]
    if not rows:
        print("No rows to import.")
        return
    upsert_questions(client, rows)
    print(f"Imported/updated {len(rows)} questions.")

if __name__ == "__main__":
    main()


