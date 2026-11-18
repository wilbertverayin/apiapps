# Timezone Meeting Scheduler

## Tagline
Never schedule a meeting at 3am again — instantly find overlap hours across every time zone your team is in.

## Target Market
Remote-first SMBs and distributed startup teams with employees or contractors spread across 3+ time zones.

## Problem
Remote teams waste time mentally converting time zones before every meeting, leading to scheduling errors and missed calls. Existing calendar tools require manual setup of each team member's location. There is no simple, shareable tool focused purely on finding the best overlap window quickly.

## Solution
A lightweight web app where users paste in a list of team members and their cities, and instantly see a visual overlap grid showing the best meeting windows for everyone. Users can share a link to a proposed meeting time that auto-converts to each recipient's local time.

## Core Features (MVP)
- Input multiple team member locations (city or timezone name)
- Visual overlap grid showing working-hours availability across time zones
- Best meeting time suggestions ranked by overlap quality
- Shareable meeting proposal link with auto-local-time display per recipient
- One-click calendar event export (ICS file)

## API Used
- WorldTime API — provides current time and UTC offset data for any city or timezone identifier

## Monetization
Freemium — free for up to 5 team members; Pro plan at $9/month for unlimited members, team presets, and branded share links.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
In scope: timezone lookup, overlap grid, shareable link, ICS export, up to 10 members. Out of scope: native calendar integrations (Google/Outlook sync), recurring meeting scheduling, user accounts/authentication in v1.
