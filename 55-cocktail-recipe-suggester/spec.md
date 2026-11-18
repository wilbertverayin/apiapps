# Cocktail Recipe Suggester for Bars

## Tagline
Turn your current bottle inventory into tonight's signature cocktail menu in under a minute.

## Target Market
Independent cocktail bars, hotel bars, and bar managers at small restaurant groups who create seasonal menus.

## Problem
Bar managers spend significant time manually cross-referencing available spirits and mixers against cocktail recipes when building seasonal or inventory-driven menus. Discovering lesser-known cocktails that feature bottles nearing the end of stock is difficult without a searchable recipe database. Creative menu planning is often limited by the manager's personal recipe knowledge.

## Solution
A cocktail planning tool where bar managers enter their available ingredients and the app returns a curated list of cocktails they can make today, ranked by ingredient match percentage. Managers can save and print a menu draft and discover new signature drinks to feature.

## Core Features (MVP)
- Ingredient inventory input (spirits, liqueurs, mixers, garnishes)
- Cocktail match engine — returns recipes achievable with current stock
- Recipe detail view with ingredients, measures, and preparation method
- Save and organize favorite or featured cocktails into a menu draft
- Print menu draft (save as PDF from the print dialog)

## API Used
- CocktailDB API — provides a database of cocktail recipes with ingredient lists, measures, instructions, and drink images

## Monetization
Freemium — free for up to 20 cocktail saves; Bar Pro at $25/month for unlimited saves, menu PDF export, and multi-bar location support.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Ingredient input, cocktail match engine, recipe detail view, saved menu drafts, print menu export.
**Out of scope:** POS inventory sync, supplier ordering integration, cost calculation per cocktail, customer-facing menu QR code, staff training module.
