# SAT Math AI Practice App - Complete Plan & Context

## Project Overview

A practice-based SAT Math web application that uses AI to help students pinpoint weak areas, get targeted practice, and track progress. The focus is on **practice and analytics**, not diagnostic testing.

---

## Core Mission

**"Master SAT Math — practice exactly what you need"**

Help students identify and master specific SAT math question types through:
- AI-powered identification of weak areas
- Targeted practice sets (not full tests)
- Clear analytics showing what to practice next
- College Board-style questions

---

## Tech Stack (Finalized)

### Frontend
- **Framework**: Next.js 14+ with TypeScript (App Router)
- **UI Library**: Tailwind CSS + shadcn/ui components
- **Hosting**: Vercel
- **Authentication**: Clerk (email + Google OAuth)

### Backend
- **Framework**: Python with FastAPI
- **Hosting**: Railway
- **API**: RESTful endpoints for AI and question generation

### Database
- **Platform**: Supabase (PostgreSQL)
- **Purpose**: Store users, questions, progress, analytics

### AI Integration
- **Provider**: OpenAI API (GPT-4/GPT-4-mini)
- **Features**: Question generation, hints, explanations, topic mapping

---

## Key Features (MVP Scope - 24 Hour Build)

### 1. Question Bank
- College Board-style SAT Math questions
- Tagged by topic, subtopic, and difficulty
- Filterable and searchable
- Initial import via CSV

### 2. AI Chat Assistant ("Ask AI Tutor")
- Natural language input: students describe their struggles
- AI maps input to specific topics/subtopics
- Generates targeted practice packs
- Provides study recommendations

### 3. Practice Engine
- One question at a time interface
- Immediate feedback (correct/incorrect)
- Progressive hints system (Hint 1 → Hint 2 → Full Solution)
- Timer (optional)
- "More like this" functionality

### 4. AI Question Generation
- Generate new SAT-style questions when bank is exhausted
- Up to X questions per session
- Based on specific topics/subtopics
- Maintains SAT question format and difficulty

### 5. Analytics Dashboard
- Accuracy by topic/subtopic (heatmap visualization)
- Progress over time (line charts)
- Average time per question
- Weak areas highlighted with "Practice Now" CTAs
- Data-driven next steps

### 6. Progress Tracking
- Per-question metrics (correct, time, hints used)
- Topic mastery calculations
- Historical improvement tracking
- Milestone system (user-set goals)

### 7. User Authentication
- Clerk integration (email + Google)
- Protected routes
- Session persistence
- User profile management

---

## Pages Structure

### Public Pages
1. **Landing Page** (`/`)
   - Hero section with value proposition
   - "How It Works" (3 steps)
   - Feature highlights
   - Analytics preview (placeholder)
   - CTA: "Start Practicing — Free"
   - Secondary CTA: "Try the AI Tutor"

2. **Sign In / Sign Up** (Clerk-managed)
   - `/sign-in`
   - `/sign-up`

### Protected Pages (After Login)

3. **Dashboard** (`/dashboard`)
   - Overview: recent performance, accuracy, topics practiced
   - Quick stats summary
   - "Continue Practice" button
   - "Ask AI for Help" button
   - Progress preview
   - Recommended next topics

4. **AI Chat Page** (`/chat` or `/tutor`)
   - Chat interface (like modern B2C SaaS chatbots)
   - Input: describe struggles in natural language
   - Output: topic identification + practice pack recommendation
   - "Start Practice" button
   - Chat history (optional)

5. **Practice Page** (`/practice`)
   - Topic selection
   - Question display (one at a time)
   - Answer input
   - Submit, Hint, Solution buttons
   - Timer display
   - Progress indicator (Q3 of 10)
   - End screen with accuracy summary

6. **Analytics/Progress Page** (`/progress` or `/analytics`)
   - Topic heatmap (accuracy by subtopic)
   - Performance graphs over time
   - Weak areas with "Fix This" CTAs
   - Detailed statistics per topic
   - Milestone tracking

7. **Profile/Settings Page** (`/settings`)
   - Account information
   - Preferences
   - Sign out
   - Optional: delete account

---

## User Flow (MVP Demo Path)

1. **Landing Page** → Click "Start Practicing"
2. **Sign Up** via Clerk (email or Google)
3. **Dashboard** loads → shows welcome + quick stats
4. **Option A**: Click "Ask AI for Help"
   - Goes to Chat page
   - User: "I struggle with quadratic equations"
   - AI: Identifies topic → recommends 10-question pack
   - Click "Start Practice"
5. **Option B**: Click "Start Practice" directly
   - Goes to Practice page
   - Select topic manually
6. **Practice Session**
   - Answer questions one by one
   - Get hints if needed
   - View solutions
   - Track time
7. **Session Complete** → Results shown
8. **Return to Dashboard** → Updated analytics
9. **View Progress Page** → See improvement graphs

---

## Landing Page Design Guidelines

### Tone & Voice
- Student-friendly, encouraging, confident
- Plain English (not overly technical)
- Avoid AI-hype language
- Focus on outcomes: "Master what you need"

### Key Sections

**Hero**
- Headline: "Master SAT Math — practice exactly what you need"
- Subheadline: "Pinpoint your weakest question types, practice targeted sets, and track progress — no full tests required"
- Primary CTA: "Start Practicing — Free"
- Secondary CTA: "Try the AI Tutor"
- Trust line: "Based on College Board question types • Practice-focused"

**Features (3 cards)**
1. Pinpoint Weak Question Types — "Tell the tutor what's tripping you up"
2. Practice Packs on Demand — "Pick a topic or generate fresh questions"
3. Track Your Progress — "Heatmap shows what to practice next"

**How It Works (3 steps)**
1. Chat or choose a topic
2. Practice focused questions
3. Track improvement

**Product Visuals**
- Blank placeholders for:
  - Analytics dashboard mockup
  - Chat assistant mockup
  - Practice question card mockup
- Each with descriptive captions

**Social Proof**
- Testimonial placeholder
- Based on College Board question types

**FAQ (3-5 questions)**
- Do you use real SAT questions?
- Is this a full test platform?
- How does AI help?

### Design Principles
- Clean, modern, professional
- Generous white space
- Restrained color palette (avoid purple/indigo unless requested)
- Mobile-responsive
- Accessible (WCAG AA)
- Fast loading

---

## Data Schema

### Collections/Tables

**Users**
```
- id (UUID, primary key)
- email
- clerk_user_id
- created_at
- last_login
```

**Questions**
```
- id (UUID, primary key)
- stem (text of question)
- choices (array, optional for free response)
- correct_answer
- explanation (optional, can be AI-generated)
- topic (e.g., "Algebra")
- subtopic (e.g., "linear_equations")
- difficulty (easy/medium/hard)
- source (college_board/ai_generated)
- created_at
```

**UserProgress**
```
- id (UUID, primary key)
- user_id (foreign key)
- question_id (foreign key)
- correct (boolean)
- time_seconds
- hints_used
- attempted_at
```

**TopicMastery** (computed/aggregated)
```
- user_id
- topic
- subtopic
- attempts
- correct_count
- accuracy (percentage)
- avg_time
- last_practiced
```

**PracticeSessions**
```
- id (UUID, primary key)
- user_id
- topic
- questions_attempted
- accuracy
- started_at
- completed_at
```

---

## AI Integration Points

### 1. Topic Mapping
**Input**: User's natural language description
**Process**: LLM classifies to SAT Math topics/subtopics
**Output**: JSON with topic, subtopic, confidence, rationale

### 2. Practice Pack Generation
**Input**: Topic/subtopic, difficulty preference, recent accuracy
**Process**: Query question bank + prioritize by user weakness
**Output**: Array of question IDs with rationale

### 3. Question Generation
**Input**: Topic, subtopic, difficulty level
**Process**: LLM generates SAT-style question with College Board format
**Output**: Question stem, choices, correct answer, explanation

### 4. Hints & Solutions
**Input**: Question details
**Process**: LLM generates progressive hints
**Output**: JSON with hint1, hint2, full_solution

### 5. Performance Analysis
**Input**: User's practice history
**Process**: Identify weak patterns
**Output**: Recommendations for next practice topics

---

## Analytics Events to Track

- `landing_hero_cta_click`
- `landing_secondary_cta_click`
- `signup_started`
- `signup_completed`
- `chat_opened`
- `practice_started`
- `question_attempted`
- `question_correct`
- `hint_requested`
- `solution_viewed`
- `practice_completed`
- `scroll_depth_25/50/75/100`
- `faq_expanded`

---

## NOT Included in MVP

- Diagnostic tests
- Full SAT practice tests
- Reading & Writing sections
- Admin panel (backend-only for now)
- Bluebook test import (planned for v2)
- Spaced repetition
- Leaderboards
- Export progress PDFs
- Push notifications
- Social features
- Teacher/admin dashboard

---

## Future Roadmap (Post-MVP)

### Phase 2
- Bluebook test import & analysis
- Full practice test mode
- Admin panel UI
- Enhanced spaced repetition

### Phase 3
- Reading & Writing sections
- ACT support
- Adaptive difficulty
- Lesson generation

### Phase 4
- Teacher dashboard
- Classroom features
- Bulk student analytics
- White-label options

---

## Development Timeline (24-Hour Sprint)

**Hours 0-3**: Setup & Infrastructure
- Next.js project setup
- Clerk authentication
- Supabase database setup
- Railway backend setup
- Environment variables

**Hours 3-6**: Core Backend
- FastAPI endpoints
- Database schema
- Question CSV import
- OpenAI integration

**Hours 6-12**: Frontend Core Pages
- Landing page
- Dashboard
- Practice page
- Basic routing

**Hours 12-16**: AI Features
- Chat interface
- Topic mapping
- Question generation
- Hints system

**Hours 16-20**: Analytics
- Progress tracking
- Data visualization
- Heatmap implementation

**Hours 20-24**: Polish & Deploy
- Testing
- Bug fixes
- Vercel deployment
- Railway deployment
- Final QA

---

## Success Metrics

### MVP Launch Criteria
- [ ] User can sign up via Clerk
- [ ] User can describe struggle in chat
- [ ] AI recommends practice pack
- [ ] User can practice 10 questions
- [ ] User receives immediate feedback
- [ ] User can view progress dashboard
- [ ] Analytics show topic accuracy
- [ ] Landing page is live and responsive

### Key Performance Indicators
- Signup conversion rate
- Practice session completion rate
- Questions per session
- Accuracy improvement over time
- Return visit rate (48-hour window)

---

## Design Inspiration

Reference sites for layout/spacing (NOT to copy directly):
- leadlee.co — Long-scroll structure, clear CTAs
- outrank.so — Soft accents, clean cards
- snapnest.co — Product showcase layout
- searchable.com — Minimal hero, centered CTA

**Key Principles from Inspiration**:
- Use for layout rhythm, not exact copying
- Borrow: spacing, card composition, section breaks
- Avoid: exact colors, imagery, text, compositions
- Create original design with our color palette

---

## Color Palette Guidance

Let design tools choose appropriate colors, but avoid:
- Heavy purple/indigo (unless specifically requested)
- Neon gradients
- AI-template clichés

Prefer:
- Professional educational colors
- Blues, teals, neutral tones
- Sufficient contrast for accessibility
- Calm, trustworthy palette

---

## Key Differentiators

1. **Practice-First**: No mandatory diagnostic tests
2. **AI-Guided**: Natural language input for struggle description
3. **Analytics-Driven**: Data shows exactly what to practice next
4. **Targeted**: Practice specific question types, not full tests
5. **Flexible**: AI generates new questions when needed

---

## Technical Considerations

### Performance
- Server-side rendering for SEO
- Optimized images
- Lazy loading for analytics
- Fast API response times

### Security
- Row-level security in Supabase
- API rate limiting
- Input sanitization
- Secure environment variables

### Scalability
- Horizontal scaling on Railway
- Database indexing
- Caching for frequent queries
- CDN for static assets

---

## Content & Legal

### Question Bank Licensing
- Use College Board question types (not verbatim questions)
- AI-generated questions for supplementation
- Proper attribution where required
- Future: Bluebook import with proper licensing

### Terms & Privacy
- Basic terms of service
- Privacy policy (Clerk + Supabase)
- Data retention policy
- User data export option

---

## Deployment Checklist

- [ ] Environment variables configured (all platforms)
- [ ] Clerk authentication working
- [ ] Supabase database migrated
- [ ] Railway backend deployed
- [ ] Vercel frontend deployed
- [ ] API endpoints tested
- [ ] OpenAI API key configured
- [ ] Landing page accessible
- [ ] Mobile responsive tested
- [ ] Analytics tracking verified

---

## Next Immediate Steps

1. **Write this context file** ✓ (you are here)
2. **Set up development environment**
3. **Create database schema in Supabase**
4. **Build FastAPI backend skeleton**
5. **Build Next.js frontend skeleton**
6. **Implement authentication with Clerk**
7. **Create landing page (using bolt.new)**
8. **Build core practice flow**
9. **Integrate AI features**
10. **Deploy and test**

---

## Contact & Resources

- OpenAI API: https://platform.openai.com
- Supabase: https://supabase.com
- Railway: https://railway.app
- Vercel: https://vercel.com
- Clerk: https://clerk.com
- College Board SAT: https://satsuite.collegeboard.org

---

**Last Updated**: [Current Session]
**Status**: Planning Phase → Ready for Implementation
**Target Launch**: 24 hours from start
