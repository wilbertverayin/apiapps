# Fake Company Data Generator for QA Teams

## Tagline
Generate complete, realistic fake company datasets in seconds so your QA team can test every edge case without touching production data.

## Target Market
QA engineers and developer teams at SaaS companies who need structured, realistic company and employee test data for staging environments, load tests, and demo databases.

## Problem
QA teams either use production data (a privacy and compliance risk) or hand-craft fake datasets that are unrealistic, lack diversity, and fail to expose edge cases. Building and maintaining custom data factories is a recurring engineering burden with no long-term value. There is no dedicated tool that generates structured company datasets — not just individual user records.

## Solution
The app combines RandomUser API (for employee profiles) with in-browser seeded synthetic company data to generate complete datasets: company name, headquarters, industry, employee roster with roles and departments, and contact details. Output is configurable and exportable in multiple formats ready for immediate use in test environments.

## Core Features (MVP)
- Company profile generation (name, industry, headquarters, website, founding year, tagline)
- Employee roster generation using RandomUser API (configurable count, departments)
- Export as JSON, CSV, or SQL INSERT
- Saved datasets by seed for repeatable test scenarios

## API Used
- RandomUser API — realistic employee profile data (name, email, avatar, address, phone)
- In-browser seeded generator: synthetic company names, industries, locations, and business metadata

## Monetization
Freemium — Free (1 company, up to 25 employees, 3 exports/day); $19/month (unlimited companies + 500 employees per dataset + all export formats + saved templates).

## Tech Stack Suggestion
Next.js + Supabase + @faker-js/faker (server-side) + Tailwind CSS.

## MVP Scope
Included in v1: company profile generation, employee roster, JSON/CSV/SQL export, saved datasets by seed.
Out of scope: real company data import, database connector (direct DB push), mock API server, compliance data masking (PII), team sharing, webhooks.
