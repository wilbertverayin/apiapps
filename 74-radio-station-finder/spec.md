# Radio Station Finder by Genre and Location

## Tagline
Discover and embed live radio streams for any genre or region — in minutes, not days.

## Target Market
Website owners, app developers, and digital signage operators who want to add ambient or genre-specific live radio to their product without licensing complexity.

## Problem
Finding reliable, embeddable internet radio streams for a specific genre or geographic region requires manual research across fragmented directories. Developers integrating radio into apps face inconsistent stream URLs, dead links, and no structured metadata. Non-technical business owners (cafes, retailers, hotel lobbies) have no easy way to discover and set up background music streams for their space.

## Solution
The app provides a searchable directory of internet radio stations sourced from Radio Browser API, filterable by genre, country, and language. Users can preview streams, generate an embeddable player snippet, and save favorite stations, making radio integration a five-minute task.

## Core Features (MVP)
- Station search with filters (genre, country, language)
- Live stream preview player in-app
- Embeddable player widget generator (copy-paste HTML audio or JS snippet)
- Favorites list with quick-access links
- Station metadata display (name, tags, bitrate, codec)

## API Used
- Radio Browser API — community-maintained directory of internet radio stations with genre tags, country data, stream URLs, and listener counts

## Monetization
Freemium — Free (search + preview + 3 embedded players); $15/month (unlimited embeds + favorites + custom player styling).

## Tech Stack Suggestion
Next.js + Supabase + Tailwind CSS + HLS.js (stream playback).

## MVP Scope
Included in v1: station search, genre/country/language filters, stream preview, embeddable widget, favorites list.
Out of scope: podcast integration, music licensing, stream hosting, recording, playlist scheduling, offline playback.
