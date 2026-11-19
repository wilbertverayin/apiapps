# Trail Condition Aggregator for Hiking Tour Companies

## Tagline
Know before you go — real-time trail condition data so your guides lead safe, memorable hikes every time.

## Target Market
Small hiking tour operators and outdoor adventure companies running guided day hikes and multi-day trips in national parks.

## Problem
Hiking tour operators must verify trail conditions before every trip to ensure guest safety and prevent legal liability, but official condition updates are scattered across NPS park pages, ranger station calls, and social media. Aggregating this manually for multiple trails across multiple parks is time-consuming and inconsistent. A single outdated condition assessment can ruin a trip or endanger guests.

## Solution
A trail planning dashboard that pulls official trail alerts, closures, and condition notices from the NPS API for a built-in catalogue of trails. Guides see a consolidated status board and get an in-page alert, while the page is open, when a new park closure is posted.

## Core Features (MVP)
- Built-in trail catalogue with filters and saved tour plans
- Current trail alerts and closure notices pulled from NPS API
- In-page alert (checked every 5 minutes while open) when a new closure is posted for a trail's park
- Print-to-PDF trail condition snapshot

## API Used
- NPS (National Park Service) API — provides park alerts, trail closures, conditions, visitor center hours, and amenity data for US national parks

## Monetization
SaaS subscription — $39/month for up to 10 watched trails; $89/month for unlimited trails and multi-park coverage.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Trail catalogue and tour plans, NPS alert and closure data display, closure alert while the page is open, condition snapshot via print to PDF.
**Out of scope:** User-submitted trail reports, weather overlay, booking or reservation management, permit availability tracking.
