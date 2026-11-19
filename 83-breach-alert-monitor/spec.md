# Breach Alert Monitor for SMB Email Lists

## Tagline
Check whether any of your employees' emails appear in a data breach, before attackers do.

## Target Market
IT managers and operations leads at small and medium businesses (10–200 employees) who lack enterprise security tooling budgets.

## Problem
SMB employees reuse passwords across personal and work accounts, meaning a breach of any consumer site can compromise corporate credentials. Most businesses only discover a breach months later via news coverage or after an actual attack. Manually checking each email on HaveIBeenPwned is impractical at team scale.

## Solution
A SaaS dashboard where businesses import their employee email list and check on demand whether any email appears in a reported breach, with a per-employee summary of which services were compromised and what data types were exposed.

## Core Features (MVP)
- CSV email import
- On-demand breach scan via HaveIBeenPwned API
- Per-employee breach history and exposed data-type summary
- Remediation checklist (force password reset, enable MFA) per alert

## API Used
- HaveIBeenPwned API (Domain Search + Breach endpoints) — returns all breaches associated with a given email or domain, including breach date, data classes exposed, and breach description

## Monetization
Per-seat SaaS — $2/employee/month, minimum 10 seats ($20/month); annual billing at 20% discount.

## Tech Stack Suggestion
Next.js + Supabase + Resend (email alerts) + Inngest (scheduled jobs) + Vercel.

## MVP Scope
Included in v1: email list import, on-demand breach scans, breach history dashboard, remediation checklist.
Out of scope: Active Directory sync, SSO, SIEM integrations, custom scan frequency on free tier.
