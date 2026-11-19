# Court Case Tracker for Legal Firms

## Tagline
Search federal court opinions and dockets, and track the cases you watch with deadlines and notes.

## Target Market
Small law firms and solo attorneys (1–15 lawyers) practicing federal litigation, appellate work, or legal research who need to track case developments without a full-time docket clerk.

## Problem
Attorneys managing federal litigation must monitor court dockets for new filings, orders, and hearing dates — but this requires manually checking PACER or CourtListener for every active case, which is time-consuming and easy to miss during busy periods. A missed motion deadline or unnoticed adverse ruling can have serious consequences for clients and the firm's malpractice exposure.

## Solution
A case monitoring dashboard where attorneys search the CourtListener API, add federal cases to a watchlist, and keep per-case notes, priorities, and manually entered deadlines.

## Core Features (MVP)
- Case search (opinions and dockets) via CourtListener and add to a watchlist
- Deadlines tab listing manually entered deadlines for watched cases
- Per-case notes and priority

## API Used
- CourtListener API — provides access to federal court dockets, opinions, oral arguments, and case metadata from PACER and direct court feeds across all US federal circuits and district courts

## Monetization
Per-case SaaS — $5/case/month monitored; Firm plan at $99/month for unlimited cases and up to 10 user seats.

## Tech Stack Suggestion
Next.js + Supabase + CourtListener API + Inngest (daily docket polling) + Resend + Vercel.

## MVP Scope
Included in v1: case search and watchlist, manual deadlines, per-case notes.
Out of scope: PACER direct integration (relies on CourtListener), state court monitoring, billing/time tracking, AI legal research.
