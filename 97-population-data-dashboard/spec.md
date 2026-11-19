# Population Data Dashboard for Urban Planners

## Tagline
Visualize population trends, density, and demographics for any region — without a GIS specialist.

## Target Market
Urban planners, municipal consultants, and real estate developers at small firms who need population data for feasibility studies, grant applications, and infrastructure proposals.

## Problem
Urban planning projects require population size, growth rate, and demographic breakdown data for specific countries and regions, but sourcing this from World Bank, census bureaus, and REST Countries requires accessing multiple APIs, cleaning inconsistent data, and rebuilding charts from scratch for every project. Small planning firms lack GIS and data science staff to do this efficiently.

## Solution
A self-service population analytics dashboard that pulls population, growth rate, and basic demographic data from World Bank and REST Countries APIs, lets planners build charts and tables for specific countries and time periods, and export the data as CSV (copied to clipboard) or JSON.

## Core Features (MVP)
- Country and region search with population, growth rate, and density data
- 50-year historical population trend chart per country
- Country fact sheet: area, capital, languages, currency, flag, population density
- Multi-country population comparison table
- Data export: copy as CSV or download as JSON

## API Used
- World Bank API — population total (SP.POP.TOTL) and population growth (SP.POP.GROW) for 180+ countries; REST Countries API — provides country metadata (area, capital, languages, flag, borders) to enrich planning context

## Monetization
Flat SaaS — $25/month per user; Firm plan at $75/month for up to 5 users with shared saved reports and branded PDF exports.

## Tech Stack Suggestion
Next.js + Supabase + World Bank API + REST Countries API + Recharts + Puppeteer (PDF) + Vercel.

## MVP Scope
Included in v1: country search, population trend charts, country fact sheets, multi-country comparison, CSV and JSON export.
Out of scope: sub-national (city/district) data, GIS map layers, demographic age/gender breakdown, live census feed.
