# Public Transit Delay Notifier for Commuters

## Tagline
Know before you go, see when your daily transit route is running late.

## Target Market
Daily commuters, remote workers with occasional office days, and HR teams managing employee commute welfare in urban areas.

## Problem
Commuters waste time standing on platforms or at bus stops because they have no proactive alert system for their specific route delays. General transit apps show delays only after you open them manually. For workers with fixed meeting schedules, even a 5-minute delay awareness window can prevent cascading tardiness.

## Solution
Users configure their regular transit routes, and the app monitors real-time delay data and flags routes with a delay above a threshold, with copyable alert text.

## Core Features (MVP)
- Route configuration by selecting transit lines into saved commutes
- Real-time delay monitoring with configurable alert threshold (e.g., 5+ minutes)
- Copyable alert text for delayed routes (no SMS or email is sent)
- Delay history log per route for the past 14 days
- Pause alerts toggle and weekdays-only setting

## API Used
- TfL Unified API (London Tube line status) and MTA service status feed (via the allorigins.win CORS proxy): provides live transit status and delay data

## Monetization
Freemium — free for 1 route and email alerts; Pro at $5/month for 5 routes and SMS alerts.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
Included in v1: route setup, delay monitoring, copyable delay alert text, delay history log, alert pause toggle.
Out of scope: live map view, trip planning, multi-modal journey optimization, native mobile app.
