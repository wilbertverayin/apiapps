# Daily Astronomy Picture Newsletter Builder

## Tagline
Build a stunning astronomy newsletter using NASA's daily space photo, zero design skills needed.

## Target Market
Science teachers, astronomy clubs, planetarium educators, and curiosity-driven newsletter creators.

## Problem
Educators and enthusiasts who want to share NASA's Astronomy Picture of the Day face the friction of manually downloading images, writing context, and formatting emails in separate tools. Doing this consistently every day is tedious, leading to irregular publishing. There is no dedicated tool that automates the end-to-end APOD newsletter workflow.

## Solution
The app fetches the daily NASA APOD image and description automatically, lets users add their own intro line, and produces a formatted HTML email they can copy, download, or open as an email draft for their subscriber list. A last-7-days archive browser shows recent pictures.

## Core Features (MVP)
- Auto-fetch of NASA APOD image, title, and description each day
- Email composer with an editable intro line and description truncation
- Subscriber list management (import CSV, unsubscribe handling)
- Send frequency preference (recorded only, no automated sending) and manual send via HTML download or email draft
- Archive browser of the last 7 days of APODs

## API Used
- NASA APOD API — provides the daily Astronomy Picture of the Day including image URL, title, description, and media type

## Monetization
Freemium — free for up to 100 subscribers; Pro at $12/month for unlimited subscribers, custom domain sending, and archive access.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
Included in v1: APOD auto-fetch, email composer, subscriber management, send frequency preference, 7-day archive browser.
Out of scope: paid newsletter subscriptions, Stripe integration, social media auto-posting, native mobile app.
