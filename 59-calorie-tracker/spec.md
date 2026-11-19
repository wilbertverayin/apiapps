# Calorie Tracker for Personal Trainers

## Tagline
Give every client an accurate, branded nutrition log that keeps them accountable between sessions.

## Target Market
Independent personal trainers and small fitness studios offering nutrition coaching as part of their training packages.

## Problem
Personal trainers who include nutrition guidance struggle to get clients to log meals consistently because generic calorie apps are not connected to the trainer-client relationship. Trainers have no visibility into client food logs, making it impossible to provide data-driven coaching between gym sessions. Off-the-shelf apps have no trainer dashboard and create a privacy barrier that breaks the coaching workflow.

## Solution
A white-label nutrition logging tool where trainers set up client profiles with calorie and macro targets, and log daily meals using the Nutritionix food database. Trainers see a weekly nutrition summary per client in their dashboard and can leave feedback notes on any day's log.

## Core Features (MVP)
- Trainer dashboard with client roster and weekly nutrition summary per client
- Client food log — search and add meals using Nutritionix food database
- Daily calorie and macro tracking vs. target with visual progress bars
- Trainer feedback notes on client logs
- Weekly nutrition report email preview

## API Used
- Nutritionix API — provides a comprehensive food and nutrition database with calorie, macro, and micronutrient data for branded foods, restaurant items, and generic foods via natural language and structured search

## Monetization
SaaS subscription — $29/month for up to 10 clients; $59/month for unlimited clients and white-label branding.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Client profiles, client calorie/macro target setup, food log with Nutritionix search, daily progress view, trainer notes, weekly report email preview.
**Out of scope:** Workout logging, meal plan generation, barcode scanning (mobile), integration with fitness wearables, billing or session scheduling.
