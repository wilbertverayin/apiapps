# SSL Certificate Expiry Monitor

## Tagline
Never let a client's SSL certificate expire, with desktop alerts weeks before it happens.

## Target Market
Web agencies and freelance developers managing maintenance contracts for 5–100 client websites.

## Problem
An expired SSL certificate instantly breaks a client website and destroys trust, but agencies managing dozens of sites have no centralized view of certificate expiry across their portfolio. Calendar reminders get lost, and most hosting control panels only alert for the agency's own domains — not client-owned certificates on external hosts.

## Solution
A monitoring dashboard where agencies add client domains and enter certificate expiry dates and receive desktop browser notifications at configurable thresholds before expiry, with a single-glance health grid showing client, expiry date, SSL Labs grade, and days remaining for every domain under management.

## Core Features (MVP)
- Add unlimited domains to monitor
- SSL Labs API check for certificate grade (A+, A, B, F); expiry date is entered manually
- Desktop browser notifications at configurable thresholds (7, 14, 30, 60 days) before expiry, while the page is open
- Dashboard grid: domain, client, grade, expiry date, days remaining
- Downloadable client-facing status page (HTML file)

## API Used
- SSL Labs API (Qualys) — performs deep SSL/TLS analysis returning certificate expiry, issuer, protocol support, and security grade for any public domain

## Monetization
Tiered SaaS — Starter: $9/month for up to 20 domains; Agency: $29/month for up to 100 domains; Unlimited: $79/month with white-label client pages.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Inngest (scheduled checks) + Vercel.

## MVP Scope
Included in v1: domain management, SSL Labs grade checks, desktop expiry alerts, dashboard grid, downloadable status page.
Out of scope: HTTP security header analysis, multi-user team access, custom alert thresholds, API access.
