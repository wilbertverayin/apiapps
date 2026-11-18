# Dad Joke Generator for Email Newsletters

## Tagline
Add a guaranteed groan (and a smile) to every newsletter, quickly drop a fresh dad joke into your email campaigns.

## Target Market
Email newsletter creators, solopreneurs, and small business owners who send a regular newsletter and want to build a distinct, personality-driven brand voice.

## Problem
Consistent newsletter personality is what drives open rates and reader loyalty, but most small newsletter operators struggle to add a personal touch beyond the main content. Coming up with original humor for every issue is creatively exhausting. Readers who chuckle at a predictable recurring joke segment are more likely to stay subscribed long-term.

## Solution
A simple web app that fetches a fresh, random dad joke and lets newsletter creators copy a pre-formatted joke block (with optional intro line and footer quip) directly into their email tool. A batch button fetches 5 jokes at once for the week's newsletters; the Monday digest sign-up form only saves the email in the browser and no email is sent.

## Core Features (MVP)
- One-click dad joke fetch with "give me another" refresh
- Pre-formatted copy blocks: plain text, HTML email snippet, and Markdown
- Category filter (puns only, question-answer format)
- Batch of 5 jokes to copy as plain text; Monday digest sign-up form that stores the email locally (no email is sent)
- Favorites list to save jokes for future use

## API Used
- icanhazdadjoke API — provides a large, curated database of dad jokes in plain text or JSON, with random fetch and search by term endpoints

## Monetization
Freemium — free unlimited joke fetching; Pro at $5/month for weekly digest, favorites library, and branded joke card image export.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
In scope: joke fetch, formatted copy blocks, category filter, batch of 5 jokes, digest sign-up form (stored locally), favorites. Out of scope: Mailchimp/Beehiiv direct integration, AI joke generation, social media auto-post of jokes in v1.
