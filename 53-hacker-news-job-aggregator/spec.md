# Hacker News Job Post Aggregator

## Tagline
Every "Who is Hiring" opportunity, searchable and filtered before the best roles disappear.

## Target Market
Independent technical recruiters and developer-focused staffing agencies who source candidates for startup and tech-company roles.

## Problem
Hacker News "Who is Hiring" threads contain thousands of high-quality engineering job posts each month, but they are buried in a single massive thread with no filtering or alerting. Recruiters and job seekers who want to stay on top of HN opportunities must manually scroll through hundreds of comments. Valuable niche roles (e.g., Rust, remote-only, seed-stage) are easy to miss without keyword search.

## Solution
A curated job feed tool that loads posts from HN "Who is Hiring" threads live and lets users set keyword filters and saved searches. Matching posts are surfaced in a clean dashboard, saving hours of manual scanning.

## Core Features (MVP)
- Live loading of current and recent HN "Who is Hiring" threads via HN Algolia API
- Full-text keyword filter (e.g., "Rust", "remote", "Series A", "ML")
- Saved searches
- Job post detail view with original HN comment link
- Bookmark posts within the app

## API Used
- HN Algolia API — provides full-text search and structured access to Hacker News posts and comments, including "Who is Hiring" monthly threads

## Monetization
Freemium — free for 2 saved searches and daily digest; Pro at $12/month for unlimited saved searches, instant alerts, and bulk export.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** HN thread indexing, keyword search and filter, saved searches, post detail view, bookmarking.
**Out of scope:** ATS integration, candidate CRM, automated outreach, LinkedIn cross-posting, paid job promotion slots.
