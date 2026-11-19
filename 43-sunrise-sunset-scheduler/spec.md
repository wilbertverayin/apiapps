# Sunrise/Sunset Scheduler for Photographers

## Tagline
Plan every golden-hour shoot with precision sunrise, sunset, and twilight times for any location on earth.

## Target Market
Freelance landscape and portrait photographers, as well as small photography studios that schedule outdoor sessions.

## Problem
Photographers spend time across multiple tools — weather apps, sun calculators, and calendar apps — to plan shoots around golden hour and blue hour. Coordinating shoot times with clients across different locations and seasons is error-prone. Missing the optimal light window means rescheduling or delivering subpar results.

## Solution
A scheduling tool that lets photographers enter a shoot location and date to instantly see precise sunrise, sunset, civil twilight, and golden-hour windows. Sessions can be saved, shared with clients via a copyable link, and exported to a calendar as an .ics file.

## Core Features (MVP)
- Location-based sun time lookup (sunrise, sunset, dawn, dusk, golden hour, blue hour)
- Session planner to save shoot dates and locations
- Copyable shareable link to a location and date
- Calendar export (.ics file) per shoot

## API Used
- Sunrise-Sunset API — provides accurate sunrise, sunset, solar noon, and twilight times for any latitude/longitude and date

## Monetization
Freemium — free for up to 5 saved sessions/month; Pro at $12/month for unlimited sessions, calendar sync, and client sharing links.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Google Maps Places API (for location autocomplete)

## MVP Scope
**Included in v1:** Sun time lookup by address or coordinates, session save/list, shareable link, iCal export.
**Out of scope:** Weather overlay, drone flight planning, moon phase data, team scheduling for studios with multiple photographers.
