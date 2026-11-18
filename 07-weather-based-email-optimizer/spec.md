# Weather-Based Email Send-Time Optimizer

## Tagline
Send your marketing emails when your audience is most likely stuck indoors and actually reading them.

## Target Market
Small e-commerce brands and DTC newsletters targeting geographically clustered customer bases.

## Problem
Email open rates are heavily influenced by whether recipients are indoors or engaged in outdoor activities, yet most email marketers schedule sends based on generic industry averages. Sending a promotional email on a sunny weekend afternoon leads to lower engagement than on a rainy midweek morning. There is no tool that correlates weather forecasts with send-time decisions.

## Solution
The app analyzes the weather forecast for a brand's customer city and recommends optimal email send windows for the coming week, ranked by predicted indoor time and attention. Users schedule their campaign with one click.

## Core Features (MVP)
- Target geography setup (one city per analysis)
- 7-day weather forecast pull per city with indoor-time scoring model
- Weekly send-time recommendation report with ranked windows
- One-click campaign scheduling to connected ESP (Mailchimp)
- Campaign history view of saved analyses with weather send scores (open rates are not imported)

## API Used
- OpenWeatherMap API — provides current weather, 5-day forecasts, and historical weather data by city or coordinates

## Monetization
Freemium — free for 1 city and Mailchimp integration; Pro at $29/month for 3 cities, multi-ESP support, and historical correlation dashboard.

## Tech Stack Suggestion
Next.js + Supabase + Mailchimp API + Resend

## MVP Scope
Included in v1: city weather pull, indoor-time scoring, weekly recommendation report, Mailchimp scheduling integration.
Out of scope: custom scoring model training, multi-ESP beyond Mailchimp, A/B test automation, real-time weather alerting.
