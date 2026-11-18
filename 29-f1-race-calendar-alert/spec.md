# F1 Race Calendar Alert

## Tagline
Never miss a lap, get F1 race, qualifying, and practice reminders in your calendar exactly when you need them.

## Target Market
Passionate F1 fans and F1-themed bars or hospitality venues that host race viewing events across multiple time zones.

## Problem
F1 races happen at wildly varying local times depending on the host circuit, making it easy for fans to miss sessions. The official F1 app is bloated and requires manual notification setup for each session. Bars and fan clubs have no simple way to automatically notify their audience before each race weekend without manual effort.

## Solution
A lightweight tool where users select their preferred sessions (race, qualifying, FP1-3) and a lead time, then download a calendar (.ics) file whose reminders fire a configurable time before each session, converted to their local time zone. An email/phone subscription form saves details in the browser only; no email or SMS is sent.

## Core Features (MVP)
- Full F1 season calendar fetched from Ergast API
- Session selection (race, qualifying, sprint, practice 1-3)
- Alert lead time configuration (15 min, 1 hour, 1 day before)
- Calendar (.ics) export with reminder alarms at the chosen lead time
- Local time zone auto-conversion based on subscriber location

## API Used
- Ergast F1 API — provides the complete Formula 1 season calendar including race names, circuit locations, and scheduled session times in UTC

## Monetization
Freemium — free email alerts for race only; Pro at $3/month for all sessions, SMS alerts, and calendar sync export.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
In scope: season calendar, session calendar export with reminder alarms, timezone conversion, locally saved subscription details. Out of scope: driver/constructor standings push, live timing integration, group/venue alert broadcasting in v1.
