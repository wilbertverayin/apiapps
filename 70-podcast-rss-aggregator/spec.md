# Podcast RSS Aggregator for Niche Topics

## Tagline
Surface the most relevant podcast episodes in your niche without drowning in general-purpose podcast apps.

## Target Market
Niche community operators, industry newsletter publishers, and professional associations who curate content for a focused audience (e.g., fintech, biotech, indie gaming).

## Problem
Niche community managers spend hours each week manually searching podcast apps to find relevant episodes worth sharing with their audience. General podcast apps are optimized for breadth, not depth in specific verticals. There is no aggregator that lets operators define keyword and topic feeds and automatically surfaces the best-matched new episodes.

## Solution
The app connects to Podcast Index API and lets operators define topical feeds using keywords, categories, and specific show subscriptions. A digest of matched episodes is generated on demand and can be copied as HTML or Markdown, shared via a link, sent as an email draft, or pushed to a Slack channel.

## Core Features (MVP)
- Podcast Index API search with keyword and category filters
- Custom feed builder (subscribe to shows + keyword rules)
- Episode digest generation on demand
- Shareable digest link (digest encoded in the URL)
- Slack webhook delivery and email draft (mailto) of the digest

## API Used
- Podcast Index API — podcast and episode metadata, category taxonomy, full-text search, and RSS feed data

## Monetization
SaaS subscription — $19/month (1 feed, up to 500 subscribers); $49/month (5 feeds, unlimited subscribers + Slack integration).

## Tech Stack Suggestion
Next.js + Supabase + Resend + Vercel Cron + Tailwind CSS.

## MVP Scope
Included in v1: keyword/category feed builder, episode matching, on-demand digest, share link, email draft, Slack webhook.
Out of scope: audio playback in-app, transcription, AI episode summarization, monetization of public digest, podcast hosting.
