# GDP Comparison Tool for Market Entry Analysts

## Tagline
Compare market size, growth, and economic health across countries in minutes.

## Target Market
Strategy consultants, market entry analysts, and international business development managers at SMBs evaluating new geographic markets.

## Problem
Market entry analysts manually download GDP data from World Bank, IMF, or government sources into spreadsheets, then spend hours normalizing, charting, and formatting it for presentations. This process is repeated for every new market evaluation project, wasting analyst time on data wrangling instead of insight generation.

## Solution
A market intelligence tool that pulls GDP, GDP per capita, and GDP growth rate data from the World Bank API for any set of countries and time range, lets analysts build comparison tables and line charts instantly, and export the data as CSV (copied to clipboard) or JSON.

## Core Features (MVP)
- Country multi-select (up to 5 countries) with GDP, GDP per capita, and growth rate
- Configurable time range (1960-2024, default 1990-2024)
- Side-by-side line chart comparisons
- CSV (clipboard) and JSON export of comparison data

## API Used
- World Bank API — provides GDP (NY.GDP.MKTP.CD), GDP per capita (NY.GDP.PCAP.CD), and GDP growth rate (NY.GDP.MKTP.KD.ZG) for 180+ countries with free, unauthenticated access

## Monetization
Credit-based + subscription — Free: 3 countries, 5-year range; Pro: $39/month for unlimited countries, full history, and export; Team: $99/month for 5 seats and shared report library.

## Tech Stack Suggestion
Next.js + Supabase + World Bank API + Recharts + PptxGenJS (PowerPoint export) + Puppeteer (PDF) + Vercel.

## MVP Scope
Included in v1: country multi-select, GDP/GDP per capita/growth charts, CSV and JSON export.
Out of scope: IMF data integration, sector-level GDP breakdown, real-time economic indicators, CRM integration.
