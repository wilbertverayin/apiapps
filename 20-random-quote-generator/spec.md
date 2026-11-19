# Random Quote Generator for Motivational Apps

## Tagline
Build a branded daily quote experience your audience actually looks forward to — in minutes.

## Target Market
Coaches, wellness brands, corporate HR teams, and newsletter creators building daily motivation products for their communities.

## Problem
Creators who want to deliver a consistent daily quote to their audience must either curate quotes manually (time-consuming) or rely on generic quote widgets that carry another brand's identity. There is no white-label tool that automates daily quote curation, branding, and delivery for non-technical creators. The result is either inconsistent delivery or a forgettable off-brand experience.

## Solution
The app fetches quotes filterable by author, lets users style a quote card (colors, typography), and offers an embeddable widget snippet and a downloadable PNG image.

## Core Features (MVP)
- Quote library browser filtered by author
- Branded quote card builder with font and color customization
- Subscriber list management (add emails, export CSV; no email delivery)
- Embeddable quote widget snippet for websites (shows a random quote on each load)
- One-click PNG download of the quote card

## API Used
- DummyJSON Quotes API: provides a free REST API of quotes with random and paginated fetch

## Monetization
Freemium — free for up to 50 subscribers and basic branding; Pro at $15/month for unlimited subscribers, full brand customization, and social image exports.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Cloudinary (for image generation)

## MVP Scope
Included in v1: quote browsing by author, brand card builder, subscriber list management, embeddable widget, PNG export.
Out of scope: AI-generated quotes, custom quote submission by users, Slack/Teams delivery, analytics beyond open rates.
