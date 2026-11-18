# Email List Validator

## Tagline
Stop burning your sender reputation — validate every email address before your cold outreach campaign goes out.

## Target Market
Cold email agencies and outbound sales teams at SMBs that send high-volume prospecting campaigns.

## Problem
Invalid or risky email addresses cause bounces that damage sender reputation and land future emails in spam. Marketers have no easy way to audit a list before sending without expensive enterprise tools. High bounce rates can get sending domains blacklisted, destroying months of domain warm-up work.

## Solution
A web app where users upload a prospect list CSV, and the app validates each email address for syntax, domain MX record existence, and mailbox reachability. Results are returned with a quality score and risk classification so users can confidently remove risky addresses before sending.

## Core Features (MVP)
- CSV upload with email column detection
- Bulk validation: syntax check, domain/MX check, mailbox reachability, disposable domain detection
- Risk classification per email (safe, risky, invalid, disposable)
- Cleaned CSV export excluding addresses that fail format and TLD checks
- Bounce rate reduction estimate shown on results page

## API Used
- Abstract Email Validation API — provides real-time email validation including syntax, MX records, SMTP reachability, and disposable email detection

## Monetization
Credit-based — free 100 validations on signup; $19 for 5,000 credits; $49 for 20,000 credits; credits never expire.

## Tech Stack Suggestion
Next.js + Supabase + Stripe

## MVP Scope
In scope: CSV upload, bulk validation, risk scoring, cleaned CSV export. Out of scope: direct ESP integrations (Mailchimp/Instantly sync), real-time webhook validation, domain warm-up tracking in v1.
