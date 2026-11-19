# Nutrition Label Generator for Food Makers

## Tagline
Generate print-ready nutrition labels for your food products in minutes, not days.

## Target Market
Artisan food producers, cottage bakers, small sauce and condiment makers selling at farmers markets or direct-to-consumer online.

## Problem
Small food producers are legally required to include accurate nutrition labels on their products but lack access to expensive food lab testing or enterprise labeling software. Manually calculating nutritional values from raw ingredient data is time-consuming and error-prone. Non-compliance can result in fines or product recalls.

## Solution
Users enter their recipe ingredients and quantities, and the app fetches nutritional data for each ingredient to compute a full nutrition facts panel. The app then generates a compliant, print-ready label image ready for packaging.

## Core Features (MVP)
- Ingredient search with nutritional data lookup by ingredient name
- Recipe builder with adjustable ingredient quantities and yield size
- Automatic calculation of calories, macros, vitamins, and minerals per serving
- Print-ready nutrition label output (FDA format, PNG download or print)
- Save and manage multiple product recipes

## API Used
- Open Food Facts API: provides nutrition data for packaged food products by search term

## Monetization
Usage-based — free for 3 saved recipes; Pro at $25/month for unlimited recipes, PDF exports, and label customization (logo, brand colors).

## Tech Stack Suggestion
Next.js + Supabase + PDFKit (or Puppeteer for PDF rendering)

## MVP Scope
Included in v1: ingredient search, recipe builder, nutrition panel calculation, basic FDA-format label image (PNG) export and print.
Out of scope: barcode generation, allergen declaration automation, regulatory filing, direct print-shop integration.
