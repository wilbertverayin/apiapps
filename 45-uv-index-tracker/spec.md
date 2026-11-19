# UV Index Tracker for Outdoor Workers

## Tagline
Protect your crew with UV threshold alerts and recommended shade-break and SPF actions throughout the workday.

## Target Market
Small landscaping companies, roofing contractors, and outdoor event staffing firms with field crews working in high-sun environments.

## Problem
Outdoor workers face real health risks from prolonged UV exposure, yet most job sites have no system to communicate UV conditions or enforce sun-safety breaks. Employers are increasingly liable for heat-related and UV-related illnesses but lack an affordable, simple tool to manage compliance. Manual UV monitoring is unrealistic on active job sites.

## Solution
A UV safety management tool where managers set up job sites by location and receive in-page alerts when UV index crosses danger thresholds. Each alert recommends shade breaks and SPF reapplication, and managers get a compliance log showing alert history.

## Core Features (MVP)
- Job site setup with location-based UV index monitoring
- Configurable UV threshold alerts (e.g., alert when UV >= 6)
- Simulated email/SMS notification entries logged at threshold breach with recommended actions
- Hourly UV forecast display per site for the current workday
- Alert log per site for compliance records, exportable as CSV

## API Used
- Open-Meteo Forecast API: provides current UV index and UV forecast data by geographic coordinates, with Open-Meteo geocoding

## Monetization
SaaS subscription — $29/month for up to 3 job sites; $69/month for unlimited sites and SMS alerting.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio (SMS)

## MVP Scope
**Included in v1:** Site location setup, UV index lookup, threshold-based in-page alerts with simulated email/SMS logging, daily UV forecast view, alert history log.
**Out of scope:** Worker-facing mobile app, wearable sensor integration, OSHA reporting export, payroll or HR system sync.
