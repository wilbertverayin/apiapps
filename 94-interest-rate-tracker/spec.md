# Interest Rate Tracker for Mortgage Brokers

## Tagline
Compare central bank policy rates and generate client-ready rate summaries.

## Target Market
Independent mortgage brokers and small mortgage advisory firms (1–10 brokers) advising residential and commercial clients on loan timing.

## Problem
Mortgage brokers need to stay ahead of interest rate changes to advise clients on whether to lock rates or wait, but monitoring Federal Reserve announcements, treasury yields, and historic rate trends requires constant manual research. Missing a rate shift by even a day can cost clients thousands of dollars in unnecessary interest.

## Solution
A dashboard that shows central bank policy rates (static snapshot data) alongside 10 years of World Bank lending rate history, includes a loan impact calculator, and auto-generates a plain-English client briefing that can be copied to the clipboard.

## Core Features (MVP)
- Dashboard of central bank policy rates (static snapshot data) for a selectable watchlist
- Historical lending rate chart (annual, last 10 years, World Bank data)
- Auto-generated client briefing (plain English summary of what changed and what it means for mortgages), copyable to clipboard

## API Used
- World Bank API: provides annual lending interest rate history by country

## Monetization
Flat SaaS — $29/month per broker; team plan at $79/month for up to 5 brokers with shared client briefing templates.

## Tech Stack Suggestion
Next.js + Supabase + FRED API + Inngest (scheduled rate checks) + Resend + Twilio + Recharts + Vercel.

## MVP Scope
Included in v1: rate dashboard, historical charts, auto-generated client briefings.
Out of scope: mortgage rate comparison from lenders, client CRM, loan application tracking, compliance archiving.
