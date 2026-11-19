# Meme Generator for Marketing Teams

## Tagline
Turn trending meme templates into on-brand marketing content in under 60 seconds.

## Target Market
In-house marketing teams and social media agencies at consumer brands who use humor-driven content to drive engagement.

## Problem
Marketing teams want to capitalize on trending meme formats but lack design tools fast enough to act before the trend fades. Photoshop workflows are too slow, and generic meme sites add watermarks and store content publicly — a brand risk. There is no meme creation tool built specifically for team collaboration with brand controls.

## Solution
The app surfaces trending and classic meme templates from the Imgflip API, lets teams overlay custom text in brand fonts and colors, preview the result, and export a PNG. A saved meme library (stored in the browser) keeps past memes organized by campaign tag.

## Core Features (MVP)
- Meme template browser from Imgflip with category filters
- Text overlay editor with font, size, color, and position controls
- Brand kit (watermark text, logo upload, brand style presets for font and color)
- Preview and export as PNG
- Saved meme library organized by campaign tag (stored in the browser)

## API Used
- Imgflip API — meme template catalog and caption image generation endpoint

## Monetization
Team SaaS — $29/month per team (up to 5 seats, 200 exports/month); $69/month (unlimited seats + exports + brand kit).

## Tech Stack Suggestion
Next.js + Supabase + Cloudinary (image storage) + Tailwind CSS + Canvas API (client-side text overlay).

## MVP Scope
Included in v1: template browser, text editor, brand kit, PNG export, saved library with campaign tags.
Out of scope: video meme support, AI text suggestions, scheduling to social platforms, animated GIF output, custom template upload.
