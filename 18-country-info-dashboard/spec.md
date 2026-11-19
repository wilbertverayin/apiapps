# Country Info Dashboard for Import/Export

## Tagline
Instantly surface the regulatory, cultural, and logistical facts you need before entering any new market.

## Target Market
Small importers, exporters, and freight brokers exploring new trade corridors or onboarding a new supplier country.

## Problem
SMBs expanding trade to a new country must manually gather currency, language, timezone, regional block membership, and basic regulatory context from a dozen different websites. This research is slow, scattered, and often outdated. Missing key country context — like a different weekend (Friday-Saturday in some MENA countries) or a non-obvious trade bloc membership — can cause costly operational mistakes.

## Solution
Users search for any country and receive a unified dashboard with all critical import/export context: currency, languages, timezones, calling codes, regional trade blocs, neighboring countries, and basic flag/capital reference data. Dashboards are exportable as a text country brief.

## Core Features (MVP)
- Country search with instant dashboard load
- Data cards: currency, languages, capital, timezones, population, calling code
- Trade bloc and regional organization memberships (EU, ASEAN, MERCOSUR, etc.)
- Neighboring countries panel with quick-link to each country's dashboard
- Exportable country brief (text file)

## API Used
- REST Countries API — provides comprehensive country data including currency, languages, timezones, flags, regional blocs, and borders for all 250 countries

## Monetization
Freemium — free for 5 country lookups/month; Pro at $19/month for unlimited lookups, PDF briefs, and saved country lists.

## Tech Stack Suggestion
Next.js + Supabase + PDFKit

## MVP Scope
Included in v1: country search, dashboard data cards, trade bloc display, neighboring countries panel, text brief export.
Out of scope: live tariff data, customs duty calculator, HS code lookup, carrier/freight rate integration.
