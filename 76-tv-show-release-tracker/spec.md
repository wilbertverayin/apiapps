# TV Show Release Tracker for Streaming Guides

## Tagline
Keep your streaming guide up to date with a weekly new episode and season digest.

## Target Market
Niche streaming recommendation newsletters, entertainment blogs, and content curators who publish weekly "what to watch" guides for a dedicated subscriber base.

## Problem
Streaming guide publishers manually track premiere dates, new season drops, and episode schedules across dozens of shows — a process that is error-prone and time-consuming. Subscribers expect accurate, timely information and will unsubscribe if a guide misses major releases. There is no automated tool that turns a tracked show list into a publish-ready weekly digest.

## Solution
Publishers add shows to a watchlist; the app loads episode and season release data from the TVmaze API and generates a weekly "new this week" digest that publishers can review and edit, with a subscriber list kept in the browser (sending is simulated, no email is delivered).

## Core Features (MVP)
- Show watchlist with TVmaze metadata
- Weekly release detection on load (new episodes, season premieres, finales)
- Draft weekly digest auto-generated from detected releases
- Review and edit the digest draft, with a local subscriber list (send button is simulated)
- Release calendar view

## API Used
- TVmaze API: show metadata, episode-level scheduling, and network data

## Monetization
SaaS subscription — $29/month (up to 2,500 subscribers, 50 tracked shows); $69/month (unlimited subscribers + tracked shows + public calendar).

## Tech Stack Suggestion
Next.js + Supabase + Resend + Vercel Cron + Tailwind CSS.

## MVP Scope
Included in v1: show watchlist, release detection, generated draft digest, local subscriber list, release calendar view.
Out of scope: streaming platform availability data, personalized recommendations, podcast integration, video embeds, monetized subscriber tiers.
