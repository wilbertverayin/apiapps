# Barcode Product Lookup for Inventory

## Tagline
Type a barcode, get the product, instantly look up item details, nutritional data, and category for faster inventory management.

## Target Market
Small grocery stores, health food shops, specialty food retailers, and small-scale distributors that manually manage product inventory and need faster item identification.

## Problem
Small food retailers spend significant time manually entering product names and details when restocking or auditing inventory, because their POS systems don't always recognize new or regional products. Looking up product information from supplier sheets is slow and error-prone. Staff turnover means new employees frequently mis-categorize products during receiving.

## Solution
A web and mobile-friendly app where warehouse staff or store owners type a product barcode and instantly retrieve the product name, brand, category, ingredients, nutritional facts, and image, sourced from Open Food Facts. Results can be exported to a simple inventory log or copied to their existing system.

## Core Features (MVP)
- Barcode input (manual entry)
- Instant product lookup: name, brand, category, image, nutritional data
- Lookup history log with timestamp
- CSV export of looked-up products for inventory import
- Manual data override for products not found in the database

## API Used
- Open Food Facts API — provides a free, open-source database of food product information including names, brands, barcodes, ingredients, nutritional values, and product images for 3M+ products worldwide

## Monetization
Freemium — 100 lookups/month free; Business at $29/month for unlimited lookups, multi-user history, and CSV export.

## Tech Stack Suggestion
Next.js + Supabase + PWA (camera API)

## MVP Scope
In scope: barcode lookup, product detail display, history log, CSV export, manual override. Out of scope: direct POS system integration, automated reorder triggers, supplier catalog matching in v1.
