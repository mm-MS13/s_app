from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
from fastapi import HTTPException
from scripts.supabase_client import get_supabase_client


class GenerateQuestionRequest(BaseModel):
    topic: str
    difficulty: str


class QuestionResponse(BaseModel):
    question: str
    options: List[str]
    answer: str
    explanation: str


app = FastAPI(title="SAT Math AI Backend", version="0.1.0")

origins = [
    os.getenv("FRONTEND_ORIGIN", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/health/supabase")
def health_supabase():
    try:
        client = get_supabase_client()
        client.auth.admin.list_users(page=1, per_page=1)
        return {"status": "ok"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"supabase_error: {str(e)}")


@app.post("/generate_question", response_model=QuestionResponse)
def generate_question(payload: GenerateQuestionRequest):
    # Minimal stubbed generator for MVP; replace with OpenAI logic later.
    topic = payload.topic.lower()
    difficulty = payload.difficulty.lower()

    if topic == "algebra":
        question = "If 2x + 3 = 11, what is the value of x?"
        options = ["3", "4", "5", "6"]
        answer = "4"
        explanation = "2x + 3 = 11 ⇒ 2x = 8 ⇒ x = 4."
    elif topic == "geometry":
        question = "A right triangle has legs of length 3 and 4. What is the hypotenuse?"
        options = ["5", "6", "7", "8"]
        answer = "5"
        explanation = "By the Pythagorean theorem: √(3^2 + 4^2) = √25 = 5."
    elif topic == "data-analysis":
        question = "The mean of five numbers is 8. If four of the numbers are 6, 7, 9, and 10, what is the fifth number?"
        options = ["7", "8", "9", "10"]
        answer = "8"
        explanation = "Sum is 5×8 = 40. Known sum is 6+7+9+10 = 32, so missing is 8."
    else:
        question = "If f(x) = x^2 - 5x + 6, what is f(3)?"
        options = ["0", "2", "3", "6"]
        answer = "0"
        explanation = "f(3) = 9 - 15 + 6 = 0."

    # For difficulty we could shuffle or change distractors later.
    return QuestionResponse(
        question=question,
        options=options,
        answer=answer,
        explanation=explanation,
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


