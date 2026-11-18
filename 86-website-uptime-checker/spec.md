# Website Uptime Checker for Agencies

## Tagline
Monitor every client site from one dashboard.

## Target Market
Digital agencies and managed-service providers with recurring website maintenance contracts for 10–200 clients.

## Problem
Agencies managing many client websites have no centralized uptime view — they rely on clients calling to report outages, which damages the agency's professional reputation. Running separate UptimeRobot accounts per client is expensive, unscalable, and produces no unified reporting agencies can use to demonstrate SLA compliance.

## Solution
An uptime monitoring dashboard that checks client sites through CORS proxies from the browser, tracks uptime and incidents per site in local storage, and generates downloadable monthly SLA reports.

## Core Features (MVP)
- Add domains and check status from the browser (no UptimeRobot sync)
- Unified dashboard: uptime %, response time, last incident per domain
- Downloadable monthly SLA report (HTML) per site

## API Used
- Public CORS proxies (allorigins.win, corsproxy.io): used to request each site and measure status and response time from the browser

## Monetization
Per-domain SaaS — $0.50/domain/month, minimum $15/month; Agency plan at $99/month for unlimited domains and white-label reports.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio (SMS) + Puppeteer (PDF reports) + Vercel.

## MVP Scope
Included in v1: browser-based site checks, unified dashboard, downloadable monthly SLA reports.
Out of scope: native monitoring engine (relies on UptimeRobot), multi-region checks, API endpoint monitoring with payload assertions.
