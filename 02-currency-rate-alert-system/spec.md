# Currency Rate Alert System

## Tagline
Get notified in the app the moment exchange rates hit your target threshold, never miss a favorable rate again.

## Target Market
Freelancers, small importers/exporters, and micro-businesses regularly converting currencies for invoices or supplier payments.

## Problem
Small businesses dealing in foreign currencies lose money by converting at unfavorable rates simply because they have no way to monitor rates in real time. Manually checking rates multiple times a day is impractical and leads to missed opportunities. Existing tools are either too complex or built for institutional traders.

## Solution
Users set target exchange rate thresholds for any currency pair and see an in-app alert when rates are hit. A simple dashboard shows rate history and pending alerts so users can act quickly.

## Core Features (MVP)
- Create currency pair alert rules (up to 5) with target rate and direction (above/below)
- Hourly rate polling
- In-app notification on threshold breach
- Rate history chart for the past 30 days
- Alert status badge (Active or Hit) per rule

## API Used
- Open Exchange Rates API (or Frankfurter API) — provides real-time and historical exchange rate data for 170+ currencies

## Monetization
Freemium — free for 3 active alerts with hourly checks; Pro at $12/month for unlimited alerts, 15-minute polling, and SMS notifications.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
Included in v1: alert rule creation, hourly rate polling, in-app notifications, 30-day rate chart.
Out of scope: bank/broker integrations, automated currency conversion execution, mobile app, Slack/Teams notifications.
