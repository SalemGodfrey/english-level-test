# English Level Test (A1–C2)

An interactive English proficiency test built with React. Answer 60 questions to find out your level — from complete beginner to mastery.

## ✨ Features

- **60 questions** across 4 categories: Grammar, Reading, Listening, and Writing
- **6 CEFR levels** — A1, A2, B1, B2, C1, C2
- **30-minute countdown timer** — finish the test or time runs out
- **Progress bar** showing which section you're on
- **Scoring system** — harder questions are worth more points (1–6 pts)
- **Change your answer** before moving to the next question
- **Instant result** — your level and total score out of 210

## 🛠️ Built With

- React
- Vite
- CSS (BEM methodology)
- JSON (question data)

## 🚀 Getting Started

```bash
git clone https://github.com/SalemGodfrey/english-level-test.git
cd english-test
npm install
npm run dev
```

Or just open index.html in english-test/dist

## 📊 Scoring

| Level | Points Required |
|-------|----------------|
| A1    | 0 – 30         |
| A2    | 31 – 60        |
| B1    | 61 – 100       |
| B2    | 101 – 150      |
| C1    | 151 – 185      |
| C2    | 186 – 210      |

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── QuestionCard.jsx
│   ├── ProgressBar.jsx
│   └── Timer.jsx
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Footer.css
│   ├── QuestionCard.css
│   ├── ProgressBar.css
├── questions.json
├── main.jsx
└── App.jsx
```