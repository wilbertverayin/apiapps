# Recipe Cost Calculator for Restaurants

## Tagline
Know your true food cost per dish and price your menu with confidence.

## Target Market
Independent restaurants, food trucks, and catering businesses with 1-5 locations trying to improve margin visibility.

## Problem
Many small restaurant operators price their menus based on gut feel rather than accurate food cost data, leading to chronically underpriced dishes and squeezed margins. Manually calculating ingredient costs per recipe is tedious and rarely updated when supplier prices change. Without accurate food cost percentages, owners cannot make informed pricing or menu engineering decisions.

## Solution
The app lets chefs enter recipes with ingredients and quantities, then optionally pre-fills estimated ingredient prices from Spoonacular to calculate cost per serving. Users input their local ingredient prices, and the app calculates food cost percentage and recommended menu prices.

## Core Features (MVP)
- Recipe builder with ingredient quantity and unit inputs
- Ingredient cost entry (manual price per unit from supplier invoices)
- Automatic food cost per serving and food cost percentage calculation
- Recommended sell price based on target food cost percentage (e.g., 28-32%)
- Recipe library with margin health indicators (green/yellow/red)

## API Used
- Spoonacular API — provides ingredient parsing, nutritional data, and unit conversion for thousands of food items used in recipe costing

## Monetization
Freemium — free for 10 recipes; Pro at $35/month per kitchen for unlimited recipes, team access, and menu export.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
Included in v1: recipe builder, manual ingredient pricing, food cost calculation, recommended price output, recipe library with margin indicators.
Out of scope: supplier invoice import/OCR, POS menu sync, real-time market price feeds, multi-location inventory management.
