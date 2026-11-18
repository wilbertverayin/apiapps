# Random Trivia Quiz Builder for Event Hosts

## Tagline
Build a custom pub quiz in minutes — generate, edit, and present trivia rounds for any theme or difficulty.

## Target Market
Pub quiz hosts, corporate event organizers, and team-building facilitators who run regular trivia nights for groups of 10-100 people.

## Problem
Sourcing fresh, accurate trivia questions for every event takes hours of manual research and writing. Free question banks are often outdated, duplicated across events, or not categorized by difficulty. Event hosts have no polished presentation layer — they typically read questions from a rough document with no timer or host controls.

## Solution
A quiz builder that pulls categorized trivia questions from Open Trivia DB, lets hosts curate questions into rounds, and then presents the quiz in a clean host-facing view with built-in timer, answer reveal, and score tracking, ready to display on a projector or share a player-facing link.

## Core Features (MVP)
- Quiz generator: select category, difficulty, and number of questions
- Question editor to re-roll (replace from OpenTDB) or remove questions before the event
- Round grouping (e.g., 4 rounds of 10 questions)
- Host presentation mode with timer, reveal answer button, and question navigation
- Shareable player link with the quiz encoded in the URL (guests answer on their own device and see their own score; answers are not sent to the host)

## API Used
- Open Trivia DB (OpenTDB) — provides a free database of community-contributed trivia questions across 24 categories with difficulty ratings and multiple-choice or true/false formats

## Monetization
Freemium — build and run unlimited quizzes free with Open Trivia DB questions; Pro at $15/month for custom question libraries, branding, and player leaderboard.

## Tech Stack Suggestion
Next.js + Supabase + Tailwind CSS

## MVP Scope
In scope: quiz generation, question re-roll and removal, round builder, host presentation mode, player answer link. Out of scope: live real-time scoring (WebSocket leaderboard), team management, video/audio question support in v1.
