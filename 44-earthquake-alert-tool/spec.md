# Earthquake Alert Tool for Construction Firms

## Tagline
Seismic event monitoring that keeps construction site managers informed before the dust settles.

## Target Market
Small to mid-size construction and civil engineering firms operating sites in seismically active regions.

## Problem
Construction sites in earthquake-prone areas face structural risk after seismic events, but project managers only learn of nearby quakes through general news or word-of-mouth. Post-quake site inspections are legally and safety-critical, yet there is no automated system to trigger the right response protocol. Delayed awareness increases liability and worker safety risk.

## Solution
A monitoring platform that watches configured site locations for nearby seismic activity and raises in-page and browser notification alerts when an earthquake of configurable magnitude occurs within a set radius. Alerts include quake details and prompt a site-inspection checklist workflow.

## Core Features (MVP)
- Site location management with configurable alert radius (e.g., 50 km) and magnitude threshold
- Real-time earthquake detection powered by USGS feed polling
- Browser notification and in-page alert with quake magnitude, depth, distance from site, and USGS event link
- Post-alert inspection checklist triggered per site (digital sign-off)
- Event history log per site with all detected seismic events

## API Used
- USGS Earthquake API — provides real-time and recent earthquake data including magnitude, location, depth, and time from the USGS Earthquake Hazards Program

## Monetization
SaaS subscription — $59/month for up to 3 sites; $119/month for up to 15 sites; enterprise pricing above that.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio (SMS) + cron job polling

## MVP Scope
**Included in v1:** Site management, USGS polling every 5 minutes, magnitude/radius filtering, browser notification alerts, inspection checklist with digital sign-off, event history log.
**Out of scope:** Structural damage assessment, insurance claim integration, IoT sensor integration, mobile native app.
