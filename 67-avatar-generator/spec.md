# Avatar Generator for Onboarding Flows

## Tagline
Give every new user a unique, on-brand avatar the moment they sign up — no uploads required.

## Target Market
B2B SaaS companies and developer tools that want to improve onboarding completion rates by making new accounts feel immediately personalized.

## Problem
New users without a profile photo appear as blank silhouettes, which makes collaborative tools feel impersonal and reduces engagement. Prompting users to upload a photo during onboarding adds friction and lowers completion rates. Manually maintaining a library of default avatars is a design burden with no personalization benefit.

## Solution
The app integrates with DiceBear API to generate unique, deterministic avatars based on the user's email or username. Product teams copy a ready-made snippet (URL, HTML, JavaScript, or React) and every new account automatically receives a styled, consistent avatar, with options to let users pick their preferred style post-signup.

## Core Features (MVP)
- Avatar generation via DiceBear API keyed to user identifier (email/username)
- Style picker (avataaars, bottts, pixel-art, lorelei, thumbs, etc.)
- Color palette customization to match brand colors
- Copyable embed snippets (URL, HTML, JavaScript fetch, React component) pointing at the DiceBear endpoint
- Avatar SVG download and DiceBear CDN URL

## API Used
- DiceBear API — deterministic avatar generation across multiple illustration styles

## Monetization
Usage-based SaaS — Free (up to 1,000 avatar generations/month); $19/month (50,000/month + custom palette + CDN hosting); $79/month (unlimited + white-label endpoint).

## Tech Stack Suggestion
Next.js + Supabase + Cloudflare R2 (avatar caching) + Tailwind CSS.

## MVP Scope
Included in v1: avatar generation, style picker, brand palette config, embed snippets, SVG download, CDN URL.
Out of scope: animated avatars, 3D styles, user avatar editor, team avatar consistency rules, Figma plugin.
