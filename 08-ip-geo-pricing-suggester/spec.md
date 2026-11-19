# IP-Based Geo Pricing Suggester

## Tagline
Suggest the right price for every visitor based on where they are in the world — automatically.

## Target Market
SaaS founders and indie developers selling digital products or subscriptions globally who want to implement purchasing power parity pricing.

## Problem
A flat global price excludes potential customers in lower-income countries who could afford a locally adjusted price. Manually researching and maintaining PPP-adjusted pricing for dozens of countries is impractical for small teams. Without geo-based pricing, SaaS products leave significant revenue on the table from underserved markets.

## Solution
The app detects visitor location via IP, looks up purchasing power parity indices, and suggests an appropriate localized price with a configurable discount range. It generates ready-to-embed JavaScript snippets (Vanilla JS, React, Next.js) and a Stripe coupon creation script.

## Core Features (MVP)
- IP-to-country detection with PPP index lookup
- Configurable base price and discount floor/ceiling per region
- Suggested localized price calculator with preview
- Embeddable JavaScript banner snippet for pricing page
- Stripe coupon creation script generated per country

## API Used
- IP Geolocation API (ipapi.co or ipwhois.io) — resolves visitor IP to country, region, currency, and timezone in real time

## Monetization
Usage-based — free tier for 500 lookups/month; Pro at $19/month for 50,000 lookups/month, Stripe integration, and custom discount rules.

## Tech Stack Suggestion
Next.js + Supabase + Stripe API

## MVP Scope
Included in v1: IP lookup, PPP-based price suggestion, JavaScript embed snippet, Stripe coupon script generation.
Out of scope: Paddle/Lemon Squeezy integrations, A/B testing geo pricing, analytics dashboard, multi-currency invoicing.
