# ISBN Book Lookup for Used Bookstores

## Tagline
Scan any book's ISBN and instantly know what you have, title, author, edition, condition, and shelf category, all in one tap.

## Target Market
Independent used bookstores, secondhand book dealers, and charity shops that process donated or purchased books and need fast identification without manual data entry.

## Problem
Used bookstore staff spend hours manually identifying books from donation bins — looking up titles on Amazon or Google to determine genre, edition, and resale category. High staff turnover means inconsistent data entry and miscategorized inventory. Without a fast lookup tool, bottlenecks at receiving prevent shops from listing books quickly enough to turn inventory.

## Solution
A mobile-friendly web app where staff scan or type an ISBN and instantly see the book's full details — title, author, publisher, edition, page count, genre, and cover image — fetched from Open Library. Staff can assign a condition rating and shelf category, then add the book to a simple inventory list with one tap.

## Core Features (MVP)
- ISBN input (manual type or camera photo scan where the browser supports BarcodeDetector)
- Book detail display: title, author, publisher, year, edition, genre, cover image
- Condition rating selector (like new, good, fair, poor)
- Shelf/category assignment (fiction, non-fiction, children's, etc.)
- Inventory list with export to CSV for spreadsheet import

## API Used
- Open Library API — provides free bibliographic data for millions of books including title, author, publisher, subjects, cover images, and edition details indexed by ISBN

## Monetization
Freemium — 200 lookups/month and 1 user free; Shop Plan at $25/month for unlimited lookups, 5 users, and inventory CSV export.

## Tech Stack Suggestion
Next.js + Supabase + PWA (camera API)

## MVP Scope
In scope: ISBN lookup, book detail display, condition/category assignment, inventory list, CSV export. Out of scope: pricing recommendations, marketplace listing sync (eBay/Amazon), POS integration, label printing in v1.
