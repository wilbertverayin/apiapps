# Cat Fact Newsletter

## Tagline
Keep your pet-loving audience engaged with a daily dose of cat trivia, ready to paste into your newsletter.

## Target Market
Pet product brands, pet subscription box companies, and veterinary clinics looking to grow and retain an email audience.

## Problem
Pet brands struggle to produce a steady stream of lightweight, shareable content that keeps subscribers engaged between promotional emails. Writing original educational content is expensive, and generic newsletters see low open rates. There is no plug-and-play newsletter tool pre-loaded with a curated animal content feed.

## Solution
The app pulls a fresh cat fact from the Cat Facts API (or a batch of five for the week), wraps it in a branded email template, and lets brands copy the result as HTML or plain text to send from their own email tool.

## Core Features (MVP)
- Daily cat fact fetch from Cat Facts API
- Branded email template builder (brand name, tagline, accent color, logo style)
- Weekly batch of five facts and a saved fact library
- Copy newsletter as HTML or plain text

## API Used
- Cat Facts API — random and curated cat trivia facts

## Monetization
Tiered SaaS — Free (up to 500 subscribers, Cat Facts branding); $19/month (up to 5,000 subscribers, white-label); $59/month (unlimited subscribers + custom domain).

## Tech Stack Suggestion
Next.js + Supabase + Resend + React Email.

## MVP Scope
Included in v1: fact fetch, branded template, weekly batch, saved fact library, copy as HTML/text.
Out of scope: multi-animal fact types, A/B testing, SMS delivery, landing page builder, paid subscriber tiers.
