# National Park Event Notifier

## Tagline
Never miss a ranger program, star party, or guided event at the parks your customers love most.

## Target Market
RV park operators, campground hosts, and outdoor travel membership clubs who want to enrich guest experiences at national parks.

## Problem
National parks run hundreds of ranger-led programs, guided hikes, and special events each year, but visitors rarely discover them in time to attend. Campground operators and travel clubs have no easy way to surface relevant upcoming events to guests who are already nearby. Guests miss out on value-added experiences that would increase their satisfaction and loyalty.

## Solution
A subscription and notification tool that monitors NPS event feeds for selected parks and generates upcoming event digests for a saved subscriber list. Operators can pick a notification template and open the digest in their email client.

## Core Features (MVP)
- Park watchlist — select one or more NPS parks to monitor for events
- Upcoming events feed display (ranger programs, guided tours, special events) from NPS API
- Weekly event digest generated from a template and opened in your email client for the subscriber list
- Copyable iframe embed code for the event feed
- Subscriber list management (add and remove)

## API Used
- NPS (National Park Service) API — provides event listings including title, description, date, time, location, contact info, and registration requirements for events across all US national parks

## Monetization
SaaS subscription — $19/month for 1 park and up to 200 subscribers; $49/month for unlimited parks and up to 2,000 subscribers.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Park watchlist, NPS event feed display, weekly digest generation with email client draft, subscriber list management, embeddable iframe code.
**Out of scope:** Event RSVP or ticketing, push notifications, two-way ranger communication, campground booking integration.
