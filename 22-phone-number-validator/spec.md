# Phone Number Validator

## Tagline
Clean your lead lists in seconds — validate, format, and enrich every phone number before your sales team dials.

## Target Market
B2B sales teams and lead generation agencies at SMBs that run outbound calling campaigns.

## Problem
Sales reps waste hours dialing disconnected or incorrectly formatted numbers sourced from web forms, scraped lists, or purchased databases. Invalid numbers inflate CRM records and skew outreach metrics. There is no simple bulk validation tool that non-technical sales ops staff can use without engineering help.

## Solution
A web app where users upload a CSV of phone numbers and receive a validated, enriched export with each number's validity status, carrier, line type (mobile/landline/VoIP), and properly formatted E.164 version. Processing happens in batch with results downloadable in minutes.

## Core Features (MVP)
- CSV upload with phone number column mapping
- Bulk validation via NumVerify API (valid/invalid, line type, carrier, country)
- E.164 formatting output alongside original input
- Downloadable results CSV with validation columns appended
- Summary showing total/valid/invalid counts, with line type per row

## API Used
- NumVerify API — provides phone number validation, carrier lookup, line type detection, and E.164 formatting for numbers worldwide

## Monetization
Pay-per-use — $0.005 per validated number; monthly subscription at $49/month for up to 20,000 validations.

## Tech Stack Suggestion
Next.js + Supabase + Stripe

## MVP Scope
In scope: CSV upload, batch validation, enriched CSV export, summary stats, pricing modal linking to Stripe payment links (placeholder URLs). Out of scope: CRM integrations (Salesforce/HubSpot sync), real-time API endpoint for developers, single number lookup widget in v1.
