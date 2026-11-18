# Vehicle VIN Decoder for Used Car Dealers

## Tagline
Decode any VIN in seconds — get complete vehicle specs, recall status, and a printable vehicle report for your lot.

## Target Market
Independent used car dealerships and small auto brokers that process 10-100 vehicle acquisitions per month and need fast, accurate vehicle specification data.

## Problem
Used car dealers waste time manually entering vehicle specifications into their inventory management systems after acquiring vehicles. Cross-referencing trim levels, engine specs, and factory options from multiple sources is error-prone and slow. Buyers increasingly expect detailed spec sheets, and dealers without a fast generation process fall behind larger competitors.

## Solution
A web app where dealers input a VIN and instantly receive a complete vehicle specification report — make, model, year, trim, engine, drivetrain, fuel type, recall status, and manufacturer plant — sourced from the NHTSA API. The report is printable as a one-page vehicle data sheet for lot display or customer handout.

## Core Features (MVP)
- VIN input with format validation (17-character check)
- Complete vehicle decode: year, make, model, trim, engine, transmission, drivetrain, fuel type, body style
- NHTSA recall status check for the decoded vehicle
- Printable one-page vehicle data sheet (browser print dialog, save as PDF)
- VIN lookup history log (stored in the browser)

## API Used
- NHTSA Vehicle API — free US government API providing VIN decoding with full vehicle specification data, recall lookups, and manufacturer information for all vehicles sold in the US market

## Monetization
Freemium — 50 VIN lookups/month free; Dealer Plan at $39/month for unlimited lookups, PDF export, and multi-user access.

## Tech Stack Suggestion
Next.js + Supabase + Puppeteer (PDF generation)

## MVP Scope
In scope: VIN decode, recall check, spec display, printable report via browser print, lookup history. Out of scope: vehicle history report (Carfax/AutoCheck integration), market value lookup, direct DMS/inventory system sync in v1.
