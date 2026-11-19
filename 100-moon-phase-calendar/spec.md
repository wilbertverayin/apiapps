# Moon Phase Calendar for Farmers and Gardeners

## Tagline
Plant, prune, and harvest on the moon's schedule — the way experienced growers have for centuries.

## Target Market
Small-scale organic farmers, market gardeners, and serious home gardeners who follow biodynamic or lunar gardening practices.

## Problem
Biodynamic and lunar gardening relies on planting specific crops during specific moon phases (root days, flower days, fruit days, leaf days), but this information is scattered across physical almanacs, generic astronomy apps, and websites that are not optimized for practical growing decisions. Farmers working long days have no quick-reference tool that combines moon phase data with actionable planting guidance for their specific crops.

## Solution
A planting calendar app that combines moon phase and lunar cycle data calculated in the browser (no API) with a planting guide by biodynamic day type, letting farmers see today's moon phase, the biodynamic day type (root/flower/fruit/leaf), and which crops to sow, prune, or harvest today, with a monthly calendar for seasonal planning.

## Core Features (MVP)
- Today's moon phase display with illumination %, phase name, and biodynamic day type
- Crop activity guide for today: what to sow, prune, or harvest based on the biodynamic day type
- Monthly moon phase calendar with biodynamic day type overlay and previous/next month navigation
- Crop lists by biodynamic day type (about 40 vegetables, herbs, and flowers)

## API Used
- None: moon phase and illumination are computed locally from the synodic cycle

## Monetization
Freemium — free for current day view; Garden Pro at $4/month for 30-day forward calendar, planting reminders, and full crop database; Farm Plan at $12/month for team access and printable monthly calendars.

## Tech Stack Suggestion
Next.js + Supabase + AstronomyAPI.com + Resend (planting reminders) + Vercel.

## MVP Scope
Included in v1: x calendar, crop lists by day type.
Out of scope: weather integration, soil temperature data, custom biodynamic calendars by region, marketplace for seed suppliers.
