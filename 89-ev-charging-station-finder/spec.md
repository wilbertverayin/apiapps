# EV Charging Station Finder for Fleet Managers

## Tagline
Plan electric fleet routes with reliable charging stops.

## Target Market
Small and mid-sized businesses operating mixed or fully electric vehicle fleets (5–100 vehicles) for delivery, field service, or transportation.

## Problem
Fleet managers converting to EVs struggle to plan routes that account for charging infrastructure availability, connector compatibility, and charging speed — information that is scattered across multiple apps and often outdated. Drivers waste time searching for compatible chargers mid-route, causing late deliveries and overtime costs.

## Solution
A fleet route planning tool that finds EV charging stations from Open Charge Map near a searched location, filters by connector type and minimum charging speed, lets you add stations to a planned route, and exports a driver itinerary as a text file with Google Maps links, alongside a simple fleet list showing each vehicle's connector type.

## Core Features (MVP)
- Fleet vehicle registry with connector type (CCS, CHAdeMO, Type 2, Tesla) per vehicle
- Route planner: add charging stations to a route manually and see distance between stops
- Charging station filter: minimum kW and connector type; operational status shown per station
- Driver itinerary export (text file with Google Maps links)
- Fleet list: vehicles and their connector types

## API Used
- Open Charge Map API — provides global EV charging station locations, connector types, charging speeds, operator info, and real-time status where available

## Monetization
Per-vehicle SaaS — $5/vehicle/month, minimum 5 vehicles ($25/month); annual billing at 15% discount.

## Tech Stack Suggestion
Next.js + Supabase + Open Charge Map API + Mapbox GL JS + Puppeteer (PDF itineraries) + Vercel.

## MVP Scope
Included in v1: fleet registry, manual route planner, station filters, text/Maps driver itinerary, fleet list.
Out of scope: real-time vehicle telematics, live battery state sync, automatic route replanning, native mobile app.
