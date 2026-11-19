# Government Tender Alert for Consultants

## Tagline
Never miss a government contract opportunity that fits your practice.

## Target Market
Independent management consultants, small consulting firms, and boutique advisory practices (1–20 consultants) pursuing government contracts in the US and UK.

## Problem
Government contracting opportunities are published across fragmented portals (SAM.gov, Contracts Finder, state procurement sites) and disappear fast — most consultants only hear about tenders through networks or chance, missing opportunities that are a perfect fit. Manually scanning these portals daily is impractical for a small firm without dedicated BD staff.

## Solution
A tender intelligence platform that searches SAM.gov for procurement notices matching the consultant's practice area keywords, NAICS codes, and budget range, with a copyable digest, saved searches, deadline tracking, and a proposal pipeline board.

## Core Features (MVP)
- Profile setup: practice areas, NAICS codes, budget range, geographic preference
- On-demand SAM.gov search for matching tenders, ranked by relevance score
- Digest of matched tenders generated in the page and copyable as text (no email delivery)
- Tender cards: agency, deadline, value, solicitation link
- Proposal pipeline board (Tracking, Go Decision, Proposal Draft, Submitted, Won/Lost)

## API Used
- SAM.gov Opportunities API: provides US federal contract opportunities, solicitations, and award notices with full search and filter capabilities

## Monetization
Tiered SaaS — Starter: $29/month (US or UK only, 3 keyword profiles); Pro: $79/month (US + UK, unlimited profiles, Slack alerts, bid log).

## Tech Stack Suggestion
Next.js + Supabase + SAM.gov API + Contracts Finder API + Inngest (daily scheduled scan) + Resend + Vercel.

## MVP Scope
Included in v1: profile setup, on-demand SAM.gov search, copyable digest, tender cards, proposal pipeline board.
Out of scope: state/local government portals, EU TED database, automated proposal drafting, CRM integration.
