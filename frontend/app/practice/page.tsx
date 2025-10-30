"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export default function PracticePage() {
  const [topic, setTopic] = useState("algebra");
  const [difficulty, setDifficulty] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  async function generate() {
    setError(null);
    setLoading(true);
    setShowResult(false);
    setSelected(null);
    try {
      const res = await fetch(`${apiBase}/generate_question`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty })
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data: Question = await res.json();
      setQuestion(data);
    } catch (e: any) {
      setError(e?.message || "Failed to fetch question");
    } finally {
      setLoading(false);
    }
  }

  function checkAnswer() {
    setShowResult(true);
  }

  const isCorrect = showResult && selected === question?.answer;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Practice</h1>

      <div className="flex flex-wrap gap-3 items-end">
        <div>
          <label className="block text-sm text-gray-600">Topic</label>
          <select className="border rounded-md px-3 py-2" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="algebra">Algebra</option>
            <option value="geometry">Geometry</option>
            <option value="data-analysis">Data Analysis</option>
            <option value="advanced-math">Advanced Math</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Difficulty</label>
          <select className="border rounded-md px-3 py-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button onClick={generate} disabled={loading} className="bg-black text-white rounded-md px-4 py-2">
          {loading ? "Generating..." : "Generate Question"}
        </button>
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      {question && (
        <div className="border rounded-md p-4 space-y-4">
          <div className="font-medium">{question.question}</div>
          <div className="space-y-2">
            {question.options.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="answer"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={checkAnswer} disabled={!selected} className="bg-gray-900 text-white rounded-md px-4 py-2">Check</button>
            <button onClick={generate} className="border rounded-md px-4 py-2">New Question</button>
          </div>
          {showResult && (
            <div className={isCorrect ? "text-green-700" : "text-red-700"}>
              {isCorrect ? "Correct!" : `Incorrect. Correct answer: ${question.answer}`}
              <div className="mt-2 text-gray-700">{question.explanation}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


