# Inflation Rate Dashboard for Financial Advisors

## Tagline
Give every client an inflation context report in the time it takes to make a coffee.

## Target Market
Independent financial advisors and small RIA firms (1–10 advisors) who need to contextualize inflation data for client portfolio reviews.

## Problem
Financial advisors spend significant prep time manually pulling CPI and inflation data from government sources to contextualize it for different client situations — retirees on fixed incomes, business owners, or investors. This data is publicly available but scattered across country-specific sources with no unified, advisor-friendly presentation layer.

## Solution
A dashboard that pulls current and historical inflation rates for multiple countries from the World Bank API, lets advisors build a client-specific inflation impact report (e.g., real return on a portfolio vs. local inflation), and copies it as HTML for client meetings.

## Core Features (MVP)
- Multi-country inflation rate dashboard (CPI annual %, last 10 years)
- Country comparison chart (up to 5 countries side-by-side)
- Real return calculator: enter nominal return, see real return adjusted for local inflation
- Client report builder: select country, date range, and talking points
- Report copied to the clipboard as HTML

## API Used
- World Bank API — provides annual CPI inflation rate (indicator FP.CPI.TOTL.ZG) for 180+ countries with historical data back to 1960, freely accessible without authentication

## Monetization
Flat SaaS — $19/month per advisor; Firm plan at $59/month for up to 5 advisors with shared branded report templates.

## Tech Stack Suggestion
Next.js + Supabase + World Bank API + Puppeteer (PDF export) + Recharts + Vercel.

## MVP Scope
Included in v1: multi-country inflation dashboard, comparison charts, real return calculator, client report builder, copy report as HTML.
Out of scope: live CPI data (World Bank is annual), portfolio management integration, compliance archiving, custom branding on base plan.
