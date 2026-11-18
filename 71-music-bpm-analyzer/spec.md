# Music BPM Analyzer for Fitness Instructors

## Tagline
Build perfectly paced workout playlists matched to your class intensity — powered by real track BPM data.

## Target Market
Independent fitness instructors, boutique studio owners (spin, HIIT, yoga), and personal trainers who program their own class music.

## Problem
Fitness instructors manually research BPM for each song before building class playlists, a tedious process that often involves unreliable crowd-sourced databases. Mismatched tempos break workout flow and reduce class quality. There is no purpose-built playlist planner that shows BPM data alongside intensity zones and lets instructors map songs to workout phases.

## Solution
Instructors search for tracks or artists via the LastFM API to discover metadata, then the app reads BPM from LastFM track tags (where tagged) to help build phase-mapped playlists (warm-up, peak, cool-down). Playlists can be copied or downloaded as text to share with substitutes or other instructors.

## Core Features (MVP)
- Track and artist search via LastFM API
- BPM display and intensity zone classification (warm-up / moderate / peak / cool-down)
- Drag-and-drop playlist builder with phase labels
- BPM range filter for targeted song discovery
- Playlist export (text list with BPM data, copied or downloaded)

## API Used
- LastFM API — track metadata, artist info, tags, and listener data used to surface and organize music content

## Monetization
SaaS subscription — $15/month per instructor; $49/month for studio (up to 10 instructors + shared playlist library).

## Tech Stack Suggestion
Next.js + Supabase + Tailwind CSS + Resend (playlist share emails).

## MVP Scope
Included in v1: track search, BPM display, phase classification, playlist builder, BPM filter, text export.
Out of scope: audio playback, Spotify/Apple Music sync, automatic BPM detection from audio upload, class scheduling integration.
