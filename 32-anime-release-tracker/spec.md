# Anime Release Tracker for Merch Stores

## Tagline
Stock the right merch at the right time, track when your top anime titles release new seasons or episodes.

## Target Market
Small anime merchandise retailers and Etsy sellers who need to time product launches and inventory decisions around new anime season releases.

## Problem
Anime merch demand spikes sharply when a new season or highly anticipated episode drops, but small shop owners have no reliable way to track release schedules across dozens of titles simultaneously. Missing a launch window means losing sales to faster competitors who stocked up in time. Manually checking anime news sites is inconsistent and time-consuming.

## Solution
A web app where merch store owners select their catalog of tracked anime titles and set per-title alert preferences plus email and Slack webhook settings, which are saved locally (no alerts are sent). The dashboard shows an upcoming release calendar so owners can plan procurement and marketing timelines weeks in advance.

## Core Features (MVP)
- Anime title search and watchlist creation (up to 30 titles)
- Upcoming season and episode release calendar view
- Per-title alert preferences (new season announced, premiere date, weekly episode) with email and Slack webhook settings saved locally; no alerts are sent
- Release data pulled from Jikan (MyAnimeList) API
- Notes field per title for internal merch planning comments

## API Used
- Jikan API (unofficial MyAnimeList API) — provides anime metadata, airing status, upcoming season schedules, and episode information for thousands of titles

## Monetization
Subscription — $19/month for up to 30 tracked titles and email alerts; $39/month for unlimited titles, Slack integration, and calendar export.

## Tech Stack Suggestion
Next.js + Supabase + Resend + cron jobs

## MVP Scope
In scope: title watchlist, release calendar, alert preferences (not sent), Jikan data fetching. Out of scope: sales data integration, social media auto-post for new releases, competitor merch tracking in v1.
