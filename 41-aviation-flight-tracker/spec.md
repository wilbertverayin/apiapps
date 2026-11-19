# Aviation Flight Tracker for Travel Agencies

## Tagline
Real-time flight tracking that keeps travel agents and their clients ahead of every departure.

## Target Market
Independent and boutique travel agencies managing group bookings and VIP client itineraries.

## Problem
Travel agents manually refresh airline websites to monitor client flights, causing delays in proactive communication when disruptions occur. Group itineraries with multiple legs are nearly impossible to track simultaneously. Missed updates lead to frustrated clients and reactive customer service.

## Solution
A dashboard that lets travel agents add client flight numbers and receive live position data, climbing, descending or level status, and webhook alerts when a tracked flight's status changes. Agents can monitor many flights from a single view and copy a client tracking link.

## Core Features (MVP)
- Flight search and tracking by callsign
- Live flight position map with altitude and speed data
- Webhook alert and in-page notification when status changes (climbing, descending, level, on ground)
- Multi-flight dashboard for monitoring concurrent itineraries
- Client-facing shareable tracking link per booking

## API Used
- OpenSky Network API — provides real-time aircraft position, velocity, and flight state data from crowdsourced ADS-B receivers worldwide

## Monetization
SaaS subscription — $49/month for up to 50 active tracked flights; $99/month for unlimited flights and white-label client links.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Mapbox GL JS

## MVP Scope
**Included in v1:** Flight search by callsign, live position polling every 30 seconds, status change webhooks, multi-flight dashboard, shareable client link.
**Out of scope:** Historical flight analytics, airline seat map integration, booking system sync, mobile native app.
