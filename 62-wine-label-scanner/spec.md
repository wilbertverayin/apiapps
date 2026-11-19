# Wine Label Scanner

## Tagline
Scan any wine label and instantly surface tasting notes, food pairings, and allergen flags for your guests.

## Target Market
Independent sommeliers, boutique wine bars, and small restaurant beverage programs managing wine education and upselling.

## Problem
Guests frequently ask sommeliers about specific bottles at the table, and manually looking up tasting notes, provenance, and food pairings is slow and unprofessional. New sommeliers and wine bar staff often lack the deep knowledge to confidently describe every bottle in a large cellar. There is no lightweight mobile tool that pulls structured wine data from a label scan.

## Solution
Staff scan or photograph a wine label; the app parses the producer and vintage, queries Open Food Facts for product data, and returns style-based tasting notes, suggested pairings, and allergen info. Results can be shared with guests via a QR code or printed card.

## Core Features (MVP)
- Label image upload with text extraction (OCR)
- Wine lookup via Open Food Facts by name, producer, and vintage
- Tasting notes and food pairing display
- Allergen and additive flag (sulfites, fining agents)
- Guest-shareable card (QR code or printed card)

## API Used
- Open Food Facts API — product data, ingredients, allergen flags, and nutritional metadata for wine products

## Monetization
SaaS subscription — $49/month per venue; unlimited label scans and staff seats.

## Tech Stack Suggestion
Next.js + Supabase + Tesseract.js (OCR) + Cloudinary (image upload) + Resend.

## MVP Scope
Included in v1: label upload, OCR extraction, Open Food Facts lookup, tasting notes display, allergen flags, printable card with QR code.
Out of scope: inventory management, POS integration, cellar tracking, mobile native app.
