# Electricity Carbon Intensity Monitor for Data Centers

## Tagline
Shift your compute workloads to the greenest grid window.

## Target Market
Small colocation data centers, cloud-native startups, and managed hosting companies that want to demonstrate carbon-aware computing without a dedicated sustainability engineer.

## Problem
Data center energy consumption is under increasing scrutiny from enterprise clients and regulators, but carbon intensity varies dramatically by region and time of day based on renewable energy availability. Most operators have no visibility into grid carbon intensity in real time, so workloads run on the dirtiest grid hours by default.

## Solution
A dashboard that continuously pulls real-time electricity carbon intensity data from the UK Carbon Intensity API (with static averages for other countries), displays the cleanest upcoming compute windows, and fires a webhook while the page is open when intensity drops below a threshold, with a green compute report based on the 24-hour forecast, printable as PDF.

## Core Features (MVP)
- Region selector (UK regions live, other countries static averages)
- Live carbon intensity gauge (gCO2eq/kWh) with 24-hour forecast
- Cleanest upcoming hour/window highlighter
- Webhook trigger that fires when intensity drops below a configurable threshold (while the page is open)
- Green compute report: % of forecast hours in low-carbon window (24-hour window)

## API Used
- UK Carbon Intensity API: provides real-time and forecast electricity carbon intensity by UK region, including breakdown by generation source (solar, wind, gas, coal)

## Monetization
Flat SaaS — $39/month per region monitored; $149/month for up to 10 regions with webhook triggers and monthly reports.

## Tech Stack Suggestion
Next.js + Supabase + ElectricityMap API + Inngest (scheduled polling) + Resend + Vercel.

## MVP Scope
Included in v1: region picker, live intensity gauge, 24h forecast, threshold webhooks, green compute report PDF.
Out of scope: direct workload scheduler integration, Kubernetes operator, carbon offset purchasing, multi-tenant billing.
