# Allergen Alert Tool for Food Delivery

## Tagline
Protect every customer from hidden allergens by surfacing clear ingredient and allergen data before the order is placed.

## Target Market
Small and mid-size food delivery platforms and ghost kitchen operators who manage their own ordering systems and menus.

## Problem
Food delivery platforms face increasing legal and safety pressure to display accurate allergen information for every menu item, but maintaining this data manually across hundreds of products is error-prone and time-consuming. Customers with allergies frequently contact support before ordering because allergen data is missing or unclear. A single allergen incident can result in regulatory fines and irreparable brand damage.

## Solution
An allergen checking tool that lets operators search the Open Food Facts database by product name or barcode and check ingredient and allergen data against a customer allergen profile. Operators can compare products, scan a list of up to 10 menu items, and print an allergen report.

## Core Features (MVP)
- Product allergen lookup from Open Food Facts by name or barcode
- Compare view of selected products against the 14 major allergens
- Customer allergen profile with sensitivity level, flagging products as Contains, May Contain, or Safe
- Allergen compliance report (print to PDF)

## API Used
- Open Food Facts API — provides crowd-sourced ingredient lists, allergen declarations, and nutritional data for hundreds of thousands of food products worldwide, queryable by barcode or product name

## Monetization
SaaS subscription — $49/month for up to 50 menu items; $99/month for unlimited items, embedded allergen badges, and compliance PDF export.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** Open Food Facts lookup by barcode or name, product compare view, menu scanner, customer allergen profile, compliance report via print to PDF.
**Out of scope:** Real-time POS menu sync, nutritional label generation, multi-language allergen declarations, live supplier ingredient change monitoring.
