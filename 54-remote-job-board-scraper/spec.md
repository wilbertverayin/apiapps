# Remote Job Board Scraper for Niche Industries

## Tagline
A curated remote job feed for specialized industries that generic job boards completely ignore.

## Target Market
Niche staffing agencies and independent recruiters placing candidates in specialized sectors such as legal tech, biotech, climate tech, or edtech.

## Problem
Generic remote job boards aggregate all industries together, making it nearly impossible for niche recruiters to efficiently surface relevant remote roles for their specific vertical. Candidates in specialized fields waste hours filtering irrelevant listings. Recruiters who focus on niche placement have no affordable tool that surfaces only the roles they care about.

## Solution
A filtered remote job feed that pulls listings from Remotive's API, lets users configure industry and keyword filters, and lets recruiters build a manual digest of selected roles. Recruiters can maintain multiple niche filter profiles for different client specializations and share them via a copyable board link.

## Core Features (MVP)
- Remotive job feed with configurable category and keyword filters
- Multiple saved filter profiles for different niche verticals
- Manual digest builder that generates HTML and can send it through your own Resend API key
- Copyable board link that reloads the page with a filter profile
- Watchlist jobs with recruiter notes

## API Used
- Remotive API — provides structured remote job listings with category, tags, company info, and job description data refreshed regularly

## Monetization
SaaS subscription — $39/month for up to 3 filter profiles; $79/month for unlimited profiles and branded job board pages.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Remotive feed integration, keyword and category filters, saved filter profiles, manual digest builder with Resend send, shareable board link, watchlist with notes.
**Out of scope:** Candidate database, ATS sync, resume parsing, direct job application tracking, scraping of non-API job boards.
