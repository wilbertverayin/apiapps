# Domain Availability Checker for Brand Consultants

## Tagline
Check hundreds of brand name and domain combinations instantly.

## Target Market
Freelance brand consultants and small naming agencies who present domain options to clients during brand identity projects.

## Problem
Brand consultants manually check domain availability one by one across multiple registrars and TLD variations, which is slow and error-prone during live client presentations. Checking social handle availability, trademark conflicts, and multiple TLDs for a shortlist of names can take hours of tedious work between sessions.

## Solution
A bulk domain and availability checker that lets consultants paste a list of candidate names and instantly see availability across selectable TLDs (.com, .io, .co, .ai, .net and more), along with RDAP expiry data for taken domains and direct registration links, exportable as a printable PDF and CSV.

## Core Features (MVP)
- Bulk name input (up to 100 names per check)
- Multi-TLD availability grid with selectable TLDs (.com, .io, .co, .ai, .net, .org and more)
- RDAP expiry date for taken domains
- One-click registration links to Namecheap
- PDF (browser print) and CSV export of results

## API Used
- RDAP (Verisign and rdap.org): provides domain availability status, registrar info, and expiry dates across TLDs

## Monetization
Credit-based — $15 for 500 domain checks; subscription at $29/month for 5,000 checks/month and PDF export branding customization.

## Tech Stack Suggestion
Next.js + Supabase + WhoisXML API + Puppeteer (PDF generation) + Stripe.

## MVP Scope
Included in v1: bulk name input, multi-TLD grid, RDAP expiry lookup, registration links, PDF and CSV export.
Out of scope: social handle availability, trademark search, automated domain monitoring/alerts.
