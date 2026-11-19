# Holiday Campaign Calendar Generator

## Tagline
Auto-generate a full year of marketing campaign ideas tied to public holidays in any country.

## Target Market
Small e-commerce brands and boutique marketing agencies managing seasonal promotions across multiple markets.

## Problem
SMB marketers waste hours manually researching public holidays per country and mapping them to campaign windows. Missing a key local holiday means missed revenue and relevance. Maintaining a shared, up-to-date holiday calendar for each market is tedious and error-prone.

## Solution
The app pulls verified public holiday data for any country and year, then generates a campaign calendar with suggested themes, copy angles, and send dates. Marketers can export the calendar as an .ics file (importable into Google Calendar) or CSV in one click.

## Core Features (MVP)
- Select one or more countries and a target year to generate a holiday list
- Template-based campaign theme suggestions per holiday
- Drag-and-drop calendar view with campaign cards
- Export to CSV and Google Calendar (.ics)
- Shareable link that restores the selected countries and year

## API Used
- Nager.Date Public Holidays API — provides public holiday dates and names for 100+ countries

## Monetization
Freemium — free for 1 country/year; Pro plan at $19/month for unlimited countries, AI suggestions, and exports.

## Tech Stack Suggestion
Next.js + Supabase + OpenAI API + Resend

## MVP Scope
Included in v1: country + year selection, holiday list generation, basic campaign theme suggestions, CSV and .ics export.
Out of scope: CRM integrations, automated campaign scheduling, email send functionality, multi-user team workspaces.
