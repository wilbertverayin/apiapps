# Fuel Price Tracker for Trucking Companies

## Tagline
Track US diesel prices by region and calculate fuel surcharges.

## Target Market
Small and mid-sized trucking companies and freight brokers (5–50 trucks) managing fuel surcharge clauses in carrier contracts.

## Problem
Fuel is the single largest variable cost for trucking companies, and fuel surcharge rates in contracts are pegged to regional diesel price indices that change weekly. Fleet managers manually check pump prices and government indices to recalculate surcharges, losing money when they miss updates and damaging client relationships when they apply them incorrectly.

## Solution
A dashboard that pulls regional US diesel prices from the EIA open data API (with built-in fallback data), calculates a fuel surcharge adjustment table from a base rate and per-mile rate, shows a fleet break-even price, and flags in the page when a price alert condition is met.

## Core Features (MVP)
- Regional diesel price feed (US regions) via the EIA open data API
- Surcharge adjustment table based on a base rate and per-mile rate
- Price alerts when a region crosses a threshold (shown in the page)

## API Used
- EIA Open Data API: provides weekly US retail diesel and gasoline prices by region

## Monetization
Flat SaaS — $29/month for up to 10 contracts; $79/month for unlimited contracts, Slack alerts, and PDF billing statements.

## Tech Stack Suggestion
Next.js + Supabase + CollectAPI Fuel + Inngest (weekly scheduled checks) + Resend + Puppeteer (PDF) + Vercel.

## MVP Scope
Included in v1: regional price feed, surcharge calculator, in-page threshold alerts.
Out of scope: fleet telematics integration, fuel card reconciliation, route optimization, multi-currency support.
