# Ingredient Substitution Tool

## Tagline
Instantly find smart ingredient swaps so caterers never have to cancel a dish.

## Target Market
Independent catering companies and private chef services managing dietary restrictions and last-minute supply shortages.

## Problem
Caterers frequently face last-minute ingredient shortages or guest dietary restrictions that force menu changes mid-event. Manually searching for safe substitutions is time-consuming and error-prone, risking allergic reactions or poor dish outcomes. There is no purpose-built tool that accounts for both culinary compatibility and dietary constraints simultaneously.

## Solution
The app accepts an ingredient and returns ranked substitution options from a built-in dataset (with optional live Spoonacular results when the user adds their own API key), filtered by dietary tags (vegan, gluten-free, nut-free, etc.). Each result includes conversion ratios and flavor notes, so caterers can make confident decisions in seconds.

## Core Features (MVP)
- Ingredient search with substitution results from a built-in dataset, plus optional live Spoonacular results with a user-supplied API key
- Dietary filter panel (vegan, vegetarian, gluten-free, dairy-free, nut-free, keto, low-sodium)
- Conversion ratio display (e.g., "use 3/4 cup X per 1 cup Y")
- Confidence badge (best / good / acceptable) with flavor notes
- Saved substitution history per local sign-in (stored in the browser)

## API Used
- Spoonacular API — ingredient substitution data, dietary metadata, and conversion ratios

## Monetization
SaaS subscription — $29/month per catering company (up to 5 users); $79/month for teams up to 25 users.

## Tech Stack Suggestion
Next.js + Supabase + Tailwind CSS + Resend (email alerts for saved substitutions).

## MVP Scope
Included in v1: ingredient search, substitution results with filters, conversion ratios, confidence badges with flavor notes, saved history, local sign-in (browser storage only).
Out of scope: full recipe management, supplier integrations, mobile app, multi-language support.
