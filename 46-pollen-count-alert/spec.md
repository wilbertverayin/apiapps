# Pollen Count Alert for Allergy Clinics

## Tagline
Keep your allergy patients one step ahead of high-pollen days with clinic-branded alert previews.

## Target Market
Independent allergy and immunology clinics and ENT practices with active patient rosters.

## Problem
Allergy patients often visit clinics reactively after a flare-up triggered by high-pollen conditions they were unaware of. Clinics want to provide proactive care but have no affordable tool to send personalized pollen alerts to their patient lists. High-pollen days also drive a spike in walk-ins that are hard to staff for without advance notice.

## Solution
A patient communication tool that lets clinic staff configure pollen type thresholds (alder, birch, grass, mugwort, olive, ragweed) and see which opted-in patients would receive a branded email alert on days when local pollen counts exceed those levels (email sending is simulated). Clinics get a dashboard showing upcoming pollen forecasts to anticipate appointment demand.

## Core Features (MVP)
- Clinic location setup with per-pollen-type threshold configuration
- Daily pollen forecast display (alder, birch, grass, mugwort, olive, ragweed) sourced from Open-Meteo
- Simulated branded patient email alerts on high-pollen days
- Patient opt-in management (import CSV, manual add, opt-in toggle)
- 7-day pollen forecast dashboard for staff demand planning

## API Used
- Open-Meteo API — provides hourly and daily pollen forecast data (alder, birch, grass, mugwort, olive, ragweed) by location at no cost

## Monetization
SaaS subscription — $49/month per clinic location, including up to 500 patient email sends/month; overage at $0.01/email.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Clinic setup, pollen threshold configuration, patient list management with CSV import, simulated alert email send, 7-day forecast dashboard.
**Out of scope:** SMS alerts, EHR/EMR integration, appointment booking triggers, per-patient pollen sensitivity profiles.
