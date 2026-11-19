# ISS Pass Time Notifier for Schools

## Tagline
Never miss the International Space Station flying overhead — get your class outside at the right moment.

## Target Market
Primary and secondary school science teachers and astronomy club coordinators running space education programs.

## Problem
Science teachers want to make the ISS visible overhead a hands-on learning experience, but calculating pass times for their specific location requires technical knowledge most teachers don't have. Checking pass times manually per session is a barrier that causes most teachers to skip this engaging activity entirely. There is no educator-focused tool that automates ISS pass alerts and pairs them with classroom resources.

## Solution
Teachers set their school location and see upcoming ISS pass times with elevation and direction, plus a viewing tips panel. The page is public, so students can look up passes from home.

## Core Features (MVP)
- School location setup by address or coordinates
- Upcoming ISS pass time lookup for the next 10 days
- Pass list showing elevation and direction for each pass
- Viewing tips panel for classroom use

## API Used
- Open Notify API (NASA) — provides predicted ISS pass times for any latitude/longitude with duration and max elevation data

## Monetization
Freemium — free for 1 location and email alerts; School plan at $9/month per school for SMS alerts, student subscribe page, and classroom resources library.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
Included in v1: location setup, 10-day pass lookup, viewing tips panel.
Out of scope: live ISS tracking map, integration with LMS platforms, multi-school district management, native mobile app.
