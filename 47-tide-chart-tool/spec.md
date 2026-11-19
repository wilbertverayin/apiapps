# Tide Chart Tool for Fishing Guides

## Tagline
Plan every charter with precise tide forecasts so your clients always hit the water at the right moment.

## Target Market
Independent fishing charter guides and small charter fleets operating in coastal and intracoastal waters.

## Problem
Fishing guides depend on tide timing to maximize catch rates, but retrieving accurate tide data from NOAA requires navigating a technical government interface not built for quick daily planning. Guides who book multiple charters per week need to cross-reference tides with trip schedules, a task done manually with printouts or generic apps that lack booking context.

## Solution
A tide planning tool tailored for fishing guides that combines NOAA tide forecasts with an activity planner. Guides enter their departure location and booking date to instantly see high/low tide times and heights, then copy a client confirmation email template with the tide table with one click.

## Core Features (MVP)
- Tide station lookup by nearest NOAA station (auto-detect from coordinates)
- Daily tide chart view showing high/low times and heights for any date
- 7-day tide table per station for trip planning
- Activity planner: save activities with a preferred tide
- One-click copy of a client confirmation email template with the tide table

## API Used
- NOAA Tides and Currents API — provides official tide predictions, water levels, and current data for hundreds of US coastal tide stations

## Monetization
Freemium — free for 1 station and 5 trips/month; Guide Pro at $19/month for unlimited stations, trips, and client email templates.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** NOAA station lookup, daily and 7-day tide chart display, activity planner, copyable client email template with embedded tide table.
**Out of scope:** Moon phase overlay, weather integration, online booking widget, payment processing, fishing regulation lookup.
