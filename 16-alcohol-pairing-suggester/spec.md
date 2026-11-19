# Alcohol Pairing Suggester for Wine Bars

## Tagline
Help your guests pair the perfect drink with their meal — every time, without training a sommelier.

## Target Market
Small wine bars, craft beer taprooms, and boutique bottle shops that want to elevate customer experience without specialist staff overhead.

## Problem
Wine bar staff are often not trained sommeliers and struggle to make confident pairing recommendations when guests describe a meal or flavor profile. Generic pairing guides don't reflect a venue's specific inventory. Poor pairing advice leads to guest dissatisfaction and reduced bottle sales.

## Solution
Staff or customers enter a dish or key flavors, and the app returns curated pairing suggestions filtered to the venue's current drink menu. Results include tasting notes and serving recommendations to help staff explain the pairing.

## Core Features (MVP)
- Dish or flavor keyword input with category tags (red meat, seafood, cheese, dessert)
- Pairing suggestions with tasting notes and food affinity rationale
- Venue drink menu import (CSV) so suggestions are filtered to in-stock options
- Tablet-friendly interface for front-of-house staff use
- Guest-facing QR code mode for self-serve pairing at the table

## API Used
- None: pairings are computed locally from built-in data; api.qrserver.com renders the shareable QR code

## Monetization
Flat subscription — $39/month per venue for unlimited pairings, menu import, and QR code guest mode.

## Tech Stack Suggestion
Next.js + Supabase

## MVP Scope
Included in v1: dish/flavor input, pairing suggestions with tasting notes, in-stock menu filter via CSV, tablet UI, QR guest mode.
Out of scope: POS inventory sync, AI sommelier chat, multi-venue management, wine purchasing recommendations.
