# Airport Delay Notifier for Logistics Firms

## Tagline
Instant airport delay intelligence so logistics teams never scramble to recover a late shipment again.

## Target Market
Small and mid-size freight forwarders and logistics companies managing time-sensitive air cargo shipments.

## Problem
Air cargo delays cascade into missed customs windows, idle warehouse crews, and broken delivery promises to end clients. Logistics coordinators have no single source of truth for airport-wide delay trends and rely on carrier calls that often come too late. Reactive rescheduling is expensive and erodes client trust.

## Solution
A monitoring tool that tracks real-time departure and arrival delay data across watched airports and shows an in-page alert, with one-click email draft or Slack webhook post, when delays exceed a configurable threshold. Teams can pre-empt disruptions rather than react to them.

## Core Features (MVP)
- Watchlist of airports with configurable delay-threshold alerts
- Real-time delay data display per airport
- One-click email draft (opens your mail client) and Slack webhook post when thresholds are breached
- On-demand digest report for watched airports, copyable or openable in your mail client
- Simple dashboard showing current delay status across all watched airports

## API Used
- Aviation Stack API — provides real-time flight status, departure/arrival delay data, and airport information for commercial flights worldwide

## Monetization
SaaS subscription — $79/month per team (up to 10 watched airports and 5 users); $149/month for unlimited airports and users.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Slack Webhooks

## MVP Scope
**Included in v1:** Airport watchlist management, threshold-based alerting, email draft and Slack webhook notifications, on-demand digest report, delay status dashboard.
**Out of scope:** Cargo tracking integration, customs system hooks, route optimization suggestions, historical trend analytics.
