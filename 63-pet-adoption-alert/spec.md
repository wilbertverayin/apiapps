# Pet Adoption Alert

## Tagline
Automate adoption lead matching so shelters spend less time on admin and more time on animals.

## Target Market
Small-to-mid-size animal shelters and rescue organizations that lack dedicated IT staff or marketing teams.

## Problem
Shelters update their listings manually and potential adopters often miss newly available animals that match their preferences. Staff spend hours responding to "do you have any golden retrievers?" inquiries that could be automated. No-shows for adoption appointments are common because there is no automated reminder or match-alert system.

## Solution
Adopters register a breed/species/age preference profile; the app imports adoptable animals from the Petfinder API (with the shelter's own credentials), matches them against profiles on a manual or timed schedule, and queues email or SMS alerts for each match. Shelters get a dashboard showing interest levels per animal to prioritize follow-up.

## Core Features (MVP)
- Adopter preference profile (species, breed, size)
- Petfinder API import with profile matching on a configurable schedule (manual/hourly/daily)
- Email and SMS alerts queued on new matches (no server-side delivery; email HTML can be copied)
- Shelter dashboard showing interest level per animal

## API Used
- Petfinder API — animal listings, breed data, shelter locations, and adoption status

## Monetization
SaaS subscription for shelters — $39/month per shelter; adopter-side notifications are free.

## Tech Stack Suggestion
Next.js + Supabase + Resend (email) + Twilio (SMS) + Vercel Cron.

## MVP Scope
Included in v1: preference profiles, scheduled matching, queued email/SMS alerts, shelter dashboard.
Out of scope: in-app messaging, appointment scheduling, donation processing, multi-shelter network view.
