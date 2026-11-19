# Gold/Silver Price Alert for Jewelry Shops

## Tagline
Know the moment gold or silver hits your target price.

## Target Market
Independent jewelry retailers and small goldsmith workshops that buy precious metal stock and need to manage material cost exposure.

## Problem
Jewelry shops set retail prices based on gold and silver spot prices at time of purchase, but those prices move daily and can swing 2–5% in a week. Without price alerts, shop owners reprice too late, either undercharging on stock bought before a spike or overcharging after a dip — both damaging profitability and customer trust.

## Solution
A lightweight price alert tool that tracks gold and silver spot prices from Yahoo Finance (with demo data as fallback), lets shop owners set buy and reprice alert levels, and shows an in-app notification when a threshold is crossed, with a simple cost-of-stock calculator showing how the current price affects margin on their inventory weight.

## Core Features (MVP)
- Gold (XAU) and silver (XAG) spot price feed in USD and EUR (Yahoo Finance, demo data fallback)
- Price alert setup: custom above/below thresholds with per-metal triggers
- In-app alert on threshold breach (no SMS or email delivery)
- Stock margin calculator: enter grams held, see current material cost and suggested retail price
- 3-month price history chart

## API Used
- Yahoo Finance chart API: provides spot price history for gold and silver; open.er-api.com supplies exchange rates

## Monetization
Flat subscription — $12/month for unlimited alerts on gold and silver; $25/month adds platinum and palladium plus SMS alerts.

## Tech Stack Suggestion
Next.js + Supabase + Metals API + Twilio (SMS) + Resend + Recharts + Vercel.

## MVP Scope
Included in v1: live price feed (gold + silver), price alerts, in-app notifications, stock margin calculator, 3-month chart.
Out of scope: inventory management system, POS integration, platinum/palladium on base plan, mobile app.
