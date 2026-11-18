# Comic Book Release Tracker for Comic Shops

## Tagline
Never miss a new issue, give your comic shop customers pull list email alerts powered by Marvel's release data.

## Target Market
Independent comic book shops that operate pull list services and want to reduce manual effort and improve customer retention through automated notifications.

## Problem
Comic shop owners manually compile weekly new release lists and notify pull list customers by phone, email, or handwritten notes — a process that is time-intensive and error-prone. Customers miss issues when shops forget to notify them, leading to returns, frustration, and lost sales. There is no purpose-built pull list management tool connected to official publisher release data.

## Solution
The app syncs with the Marvel API (with the shop's own key, otherwise demo data) to track upcoming and newly released issues. Staff register customers and their pull lists, and send email alerts through the shop's own Resend account when titles are released. Shop staff get a consolidated weekly pull list dashboard to prepare orders efficiently.

## Core Features (MVP)
- Marvel API-powered release browser (demo data without an API key)
- Customer pull list registration (staff entry, plus a registration link whose sign-ups are stored in the same browser only)
- Weekly new release email alerts per customer pull list, sent manually via the shop's Resend key
- Staff weekly pull dashboard (who gets what, grouped by customer)
- Release calendar view for the next 4 weeks

## API Used
- Marvel API — comic series, issue metadata, release dates, character data, and creator information

## Monetization
SaaS subscription — $49/month per shop (unlimited pull list customers + automated alerts + dashboard).

## Tech Stack Suggestion
Next.js + Supabase + Resend + Vercel Cron + Tailwind CSS.

## MVP Scope
Included in v1: Marvel API release browser, customer pull list registration, manually sent email alerts, staff dashboard, release calendar.
Out of scope: DC/Image Comics integration, online ordering, payment processing, inventory management, loyalty rewards.
