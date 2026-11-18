# Animal Image Generator

## Tagline
On-demand animal photos for children's apps, no design team required.

## Target Market
Indie developers and small studios building children's educational apps, games, or e-books who need a reliable source of safe, age-appropriate animal imagery.

## Problem
Children's app developers need large, diverse libraries of animal images that are royalty-free, safe for all ages, and consistent in style. Stock photo subscriptions are expensive, and free APIs return inconsistent image quality or require manual curation. Searching multiple APIs for each animal type adds significant development overhead.

## Solution
A single API-like dashboard and embeddable widget that unifies random dog images (Dog API), cat photos (Cat API), and fox photos (RandomFox) behind one interface. Developers can browse by animal type and breed, download, or copy a direct image URL.

## Core Features (MVP)
- Unified browsing across Dog API, Cat API, and RandomFox
- Animal type tabs (dogs, cats, foxes) with breed selection
- Image preview grid
- One-click copy of image URL or direct download

## API Used
- RandomFox API: random fox images
- Dog CEO Dog API — random dog breed images
- The Cat API — random cat images and breed data

## Monetization
Freemium + API key tiers — Free (100 requests/day); $15/month (5,000 requests/day + bulk download); $49/month (unlimited + commercial license badge).

## Tech Stack Suggestion
Next.js + Supabase + Cloudflare Workers (API proxy/rate-limit) + Tailwind CSS.

## MVP Scope
Included in v1: unified browsing, animal type tabs, preview grid, image URL copy, download.
Out of scope: image editing, AI generation, video clips, user-uploaded content, age-rating classification.
