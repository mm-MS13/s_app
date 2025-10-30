# SAT Math AI Practice — Local MVP

This repository contains a local-only MVP for an SAT Math practice application.

Tech stack:
- Frontend: Next.js 14 (TypeScript + Tailwind)
- Backend: FastAPI (Python)
- Database: Supabase (Postgres) — placeholders only in MVP
- AI: OpenAI API (gpt-4o-mini) — placeholder stubs for now
- Auth: Clerk — mocked in MVP

## Structure

```
frontend/  # Next.js 14 App Router (TypeScript + Tailwind)
backend/   # FastAPI app with /health and /generate_question
```

## Setup

### Backend (FastAPI)
1) Create a virtual environment and install deps:
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```
2) Configure environment (optional now):
 - Copy `env.example` to `.env` and fill values if needed.
3) Run the server:
```powershell
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
 - Health: `http://localhost:8000/health`

### Frontend (Next.js)
1) Install deps:
```powershell
cd frontend
npm install
```
2) Environment:
 - Copy `env.local.example` to `.env.local` and adjust if needed.
3) Run dev server:
```powershell
npm run dev
```
 - App: `http://localhost:3000`

## End-to-end Flow to Test
1) Start backend on port 8000 (see above).
2) Start frontend on port 3000.
3) Navigate to `http://localhost:3000/practice`.
4) Choose a topic/difficulty and click "Generate Question".
5) Select an option and click "Check" to see immediate feedback.

## Notes
- Clerk and Supabase are placeholders. Auth is mocked on `/login`.
- Question generation is stubbed in the backend for now (no OpenAI calls yet).
