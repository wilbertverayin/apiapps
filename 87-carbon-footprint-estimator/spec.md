# Carbon Footprint Estimator for Logistics

## Tagline
Calculate and report the carbon emissions of every shipment you make — without a sustainability team.

## Target Market
Small and mid-sized logistics companies, couriers, and freight brokers who need emissions reporting for customer ESG requirements or EU regulatory compliance.

## Problem
Enterprise shippers increasingly demand carbon footprint data from logistics partners as part of procurement and ESG reporting, but small logistics firms have no affordable tool to calculate per-shipment emissions. Manual spreadsheet calculations are inconsistent, non-auditable, and can't scale across hundreds of daily shipments.

## Solution
A web app where logistics operators enter shipment details (origin, destination, vehicle type, weight) and receive an instant carbon emissions estimate using the Carbon Interface API, with the ability to generate per-shipment certificates and an emissions summary by transport mode.

## Core Features (MVP)
- Shipment form: origin/destination, transport mode (truck, air, sea, rail), cargo weight
- Instant CO2e emissions estimate via Carbon Interface API
- Per-shipment carbon certificate PDF
- Emissions summary (total CO2e by mode across saved estimates)
- CSV bulk import for batch shipment calculation

## API Used
- Carbon Interface API — calculates CO2 equivalent emissions for shipping by transport mode, distance, and weight using verified emissions factors

## Monetization
Credit-based — $0.10 per calculation; subscription at $49/month for 1,000 calculations/month and branded certificates; $149/month for unlimited.

## Tech Stack Suggestion
Next.js + Supabase + Carbon Interface API + Puppeteer (PDF certs) + Stripe + Vercel.

## MVP Scope
Included in v1: shipment form, emissions calculation, per-shipment PDF certificate, emissions summary, CSV bulk import.
Out of scope: live GPS route tracking, carbon offset purchasing, Scope 3 supply chain mapping, ERP integrations.
