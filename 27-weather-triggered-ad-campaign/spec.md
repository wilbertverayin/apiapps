# Weather-Triggered Ad Campaign Tool

## Tagline
Plan ads that react to real weather, see which campaign would activate when it rains, heats up, or snows.

## Target Market
Small e-commerce brands and local service businesses (HVAC, lawn care, outdoor apparel) that run Google or Meta ads with weather-sensitive products.

## Problem
Weather dramatically affects buying intent for many product categories, but most SMB advertisers run static campaigns that ignore current conditions. Manually pausing and activating campaigns based on weather is impractical and often forgotten. Missing the right weather moment means wasted budget and lost conversions.

## Solution
A tool that lets businesses define weather rules (e.g., "activate rain gear campaign when precipitation > 5mm in target city"). The app refreshes Open-Meteo weather hourly while the page is open and marks campaigns active or paused locally when conditions match (simulation mode, no ad account connection), logging each trigger.

## Core Features (MVP)
- Weather rule builder: condition, threshold, target city, linked campaign
- Hourly weather refresh for the selected location via Open-Meteo while the page is open
- Local campaign activation and pause evaluated against live weather (simulation, no ad platform API)
- Email and Slack notification preferences saved locally (no messages are sent)
- Rule history log showing trigger events and campaign actions taken

## API Used
- Open-Meteo Forecast API: provides current conditions (temperature, precipitation, wind, humidity) and hourly forecasts by coordinates, with Nominatim geocoding

## Monetization
Subscription — Starter at $29/month for 3 rules and 1 ad account; Pro at $79/month for unlimited rules and 3 ad accounts.

## Tech Stack Suggestion
Next.js + Supabase + BullMQ (Redis) + Resend

## MVP Scope
In scope: weather rule builder, hourly weather refresh, local campaign activation, notification preferences (not sent), trigger log. Out of scope: forecast-based pre-scheduling, multi-channel ad support beyond one platform, mobile app in v1.
