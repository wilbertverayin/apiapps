# Public Transport CO2 Comparison Tool

## Tagline
Show employees the carbon cost of every commute option and nudge them toward greener choices.

## Target Market
HR and sustainability teams at SMBs (50–500 employees) running employee commute programs or reporting on Scope 3 emissions for ESG frameworks like GRI or CSRD.

## Problem
Companies required to report Scope 3 employee commute emissions have no affordable tool to compare transport mode emissions consistently across their workforce. Employees have no personal visibility into the carbon difference between driving alone, carpooling, cycling, or taking transit for their specific commute — so behavioral nudges are generic and ineffective.

## Solution
A web app where employees enter their commute route and see a side-by-side CO2 comparison for driving (petrol/diesel/EV), carpooling, bus, train, and cycling, powered by OpenStreetMap Nominatim distances and DEFRA 2023 emission factors. A department breakdown builds an aggregate Scope 3 commute emissions report for ESG disclosure.

## Core Features (MVP)
- Employee commute entry: home address, workplace, days/week
- Side-by-side CO2e comparison per mode (car, carpool, bus, train, cycle, walk)
- Yearly CO2e projection and equivalent trees planted
- Department breakdown: aggregate commute emissions by mode and department (departments entered manually)
- CSV export of commute emissions data for ESG reporting

## API Used
- OpenStreetMap Nominatim: geocodes home and workplace to a distance; DEFRA 2023 emission factors (built in) convert distance and mode to CO2e

## Monetization
Per-employee SaaS — $1/employee/month billed annually; minimum 50 employees ($50/month); ESG report export included at Growth tier ($149/month).

## Tech Stack Suggestion
Next.js + Supabase + Google Maps Directions API + Carbon Interface API + Resend + Vercel.

## MVP Scope
Included in v1: commute form, multi-mode CO2 comparison, yearly projection, department breakdown, CSV export.
Out of scope: commuter subsidies management, live transit schedules, mobile app, payroll integration.
