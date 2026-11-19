# NFL/NBA Game Day Notifier for Venues

## Tagline
Fill seats on game day — automatically alert your customers when their team plays next so they show up at your venue.

## Target Market
Sports bars, restaurants, and entertainment venues in the US that host NFL and NBA watch parties and want to drive predictable game-day revenue.

## Problem
Venues lose potential game-day revenue because customers simply forget when games are scheduled, especially mid-week NBA matchups. Manually sending game-day notifications requires staff time and a consistent process most small venues don't have. Generic marketing emails get ignored, but a timely "your team plays tonight" message converts.

## Solution
A venue tool where the owner selects their featured teams and keeps a subscriber email list. The app generates game-day alert copy from templates with the venue name, tip-off/kickoff time, and opponent, and previews it for the list; nothing is actually sent.

## Core Features (MVP)
- NFL and NBA team selection per venue
- Subscriber email list management (add emails or import CSV)
- Game-day alert copy generation and send preview (no delivery)
- Message templates (game day, result, preview) with venue name
- Game schedule display for venue owner dashboard

## API Used
- TheSportsDB API: provides NFL and NBA schedules, team data, and badges

## Monetization
Subscription — $39/month per venue for 1 sport and up to 500 subscribers; $79/month for both sports and unlimited subscribers.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
In scope: NFL/NBA schedule polling, subscriber management, alert copy generation and preview, message templates, venue dashboard. Out of scope: live in-game score push notifications, POS system integration, multi-location chain management in v1.
