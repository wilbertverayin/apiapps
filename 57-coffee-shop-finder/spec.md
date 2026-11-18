# Coffee Shop Finder for Co-Working Apps

## Tagline
Give your co-working community a curated map of the best nearby cafes to work from, baked right into your app.

## Target Market
Co-working space operators and remote work community platforms serving distributed teams and digital nomads.

## Problem
Remote workers constantly seek café alternatives to their home office or co-working desk, but generic map apps surface noisy bars and fast-food outlets alongside genuine work-friendly coffee shops. Co-working platforms have no way to offer a curated, venue-quality café discovery experience to their members without building custom map infrastructure. Members churn when the community feels thin on value.

## Solution
An embeddable coffee shop discovery feature that uses Foursquare Places data to surface nearby cafes with ratings, hours, wifi mention flags, and photos. Co-working app operators white-label the experience as a member perk, with built-in curated lists and a copyable favorites list.

## Core Features (MVP)
- Location-based coffee shop search powered by Foursquare Places
- Venue detail cards with name, address, rating, hours, and photos
- Filter by distance and minimum rating
- Built-in curated lists (e.g., "Best spots in Amsterdam")
- Embeddable map widget for integration into existing co-working member portals

## API Used
- Foursquare Places API — provides venue search, place details, ratings, hours, photos, and tips for millions of venues worldwide filtered by category

## Monetization
SaaS subscription — $49/month per operator community, including embeddable widget and curated lists; white-label branding at $99/month.

## Tech Stack Suggestion
Next.js + Supabase + Mapbox GL JS + Foursquare Places API

## MVP Scope
**Included in v1:** Location search, venue detail cards, distance and rating filters, built-in curated lists, embeddable iframe widget.
**Out of scope:** Real-time crowd/noise level data, café reservation integration, member check-in tracking, loyalty rewards with café partners.
