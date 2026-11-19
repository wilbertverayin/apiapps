# Artist Tour Date Notifier

## Tagline
Get ahead of ticket resale opportunities by spotting new tour dates fast.

## Target Market
Independent ticket resellers and small ticket broker businesses that rely on speed-to-market to acquire inventory before prices surge.

## Problem
Ticket resellers manually monitor dozens of artist pages and venue sites for tour announcements, missing early windows when face-value tickets are available in quantity. Being even a few hours late on a major announcement means losing access to the best inventory at the best prices. There is no automated monitoring tool designed specifically for resellers who track large artist portfolios.

## Solution
Resellers build a watchlist of artists and the app checks Bandsintown (on manual refresh) for new tour date announcements, flags new dates, and generates ready-to-copy SMS, email, and Slack alert text with event details, venue capacity hints, and ticket links.

## Core Features (MVP)
- Artist watchlist (add/remove artists by name)
- Bandsintown API refresh to detect new event announcements (manual, not scheduled)
- SMS, email, and Slack alert text generator for new dates (copy to send; nothing is sent automatically)
- Alert includes: artist, venue, city, date, ticket link
- Detection history log per artist with check timestamps

## API Used
- Bandsintown API — artist event data, tour dates, venue info, and ticket purchase links

## Monetization
SaaS subscription — $39/month (up to 50 artists tracked); $99/month (unlimited artists + SMS alerts + priority polling).

## Tech Stack Suggestion
Next.js + Supabase + Resend (email) + Twilio (SMS) + Vercel Cron.

## MVP Scope
Included in v1: artist watchlist, Bandsintown refresh, copyable SMS/email/Slack alert text, event detail view, detection history log.
Out of scope: automated ticket purchasing, price tracking, secondary market data, team seat sharing, mobile app.
