# Air Quality Scheduler for Outdoor Events

## Tagline
Schedule outdoor events on the days when the air is actually safe to breathe.

## Target Market
Outdoor event planners, youth sports leagues, and school activity coordinators in urban or high-pollution areas.

## Problem
Organizers of outdoor events often overlook air quality when picking dates, exposing attendees — especially children and elderly — to harmful pollution levels. Rescheduling last-minute due to poor air quality is costly and disruptive. There is no simple tool that combines air quality forecasts with event scheduling.

## Solution
The app integrates real-time and 5-day air quality forecasts for any location, allowing users to pick event dates with confidence. Color-coded AQI indicators and a threshold warning make it easy to plan safe events.

## Core Features (MVP)
- Location-based AQI lookup using city name or coordinates
- 5-day air quality forecast with AQI category color coding (Good/Moderate/Unhealthy)
- Event scheduling calendar that overlays AQI data on each day
- Alert banner (with a pre-filled email draft link) when current AQI is above a user-defined threshold
- Exportable event schedule with AQI notes attached

## API Used
- AirVisual API (IQAir) — provides real-time and forecast AQI data including PM2.5, PM10, and O3 by city and coordinates

## Monetization
Freemium — free for 1 location and 3 events; Pro at $15/month per organization for unlimited locations, events, and alerts.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
Included in v1: city-based AQI lookup, 5-day forecast view, basic calendar, threshold alert banner.
Out of scope: integration with event booking platforms, automated rescheduling, push notifications, mobile app.
