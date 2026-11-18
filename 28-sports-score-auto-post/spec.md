# Sports Score Auto-Post for Sports Bars

## Tagline
Keep your social media buzzing on game day, automatically post match results while the page is open.

## Target Market
Sports bars, fan clubs, and sports-focused hospitality venues that want to drive foot traffic and social engagement on game days.

## Problem
Sports venues know that timely social posts on game days drive foot traffic and engagement, but staff are too busy running the floor to post scores manually. Hiring a social media manager just for game day is cost-prohibitive for small venues. Missing the moment of a big goal or final score means losing the viral window.

## Solution
A web app where sports bars select their favorite teams and social accounts, and the app polls TheSportsDB for their teams and posts final results to their Facebook and Instagram pages through the Meta Graph API (using a user-supplied access token), with a customizable branded template.

## Core Features (MVP)
- Team selection across major sports leagues (football, basketball, baseball)
- Social account connection (Facebook Page, Instagram Business)
- Score polling via TheSportsDB every 5 to 60 minutes while the page is open
- Branded post template editor with logo and color customization
- Post trigger toggles for kickoff, goal/score, halftime, and full-time (only full-time results auto-post)

## API Used
- TheSportsDB API — provides live scores, match events, team data, and league schedules for hundreds of sports leagues worldwide

## Monetization
Subscription — $29/month per venue for up to 3 teams and 2 social accounts; $59/month for unlimited teams and accounts.

## Tech Stack Suggestion
Next.js + Supabase + BullMQ (Redis) + Meta Graph API

## MVP Scope
In scope: team/league selection, Facebook/Instagram posting, score polling, template editor, trigger configuration. Out of scope: Twitter/X integration, video highlight posting, ticket sales CTAs, multi-location management in v1.
