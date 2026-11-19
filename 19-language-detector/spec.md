# Language Detector for Multilingual Support Teams

## Tagline
Instantly detect the language of any incoming message and route it to the right agent — automatically.

## Target Market
Small customer support teams and helpdesks at SaaS companies or e-commerce brands serving international customers.

## Problem
Support teams handling multilingual inboxes waste time manually identifying the language of each ticket before routing it, leading to delayed responses and customer frustration. Routing a French-speaking customer to an English-only agent creates a poor experience and increases handle time. Most helpdesk tools lack built-in language detection and routing based on message language.

## Solution
The app detects the language of pasted support messages in the browser using the franc library, tags each ticket with the detected language and confidence score, and applies routing rules to assign the ticket to an agent with matching language skills. A dashboard shows language volume trends.

## Core Features (MVP)
- Paste a support message for instant language detection
- Language tag with ISO 639-1 code, language name, and confidence score
- Routing rule builder: assign language X to agent or queue Y
- Language volume dashboard (by day, week, month)
- Zendesk webhook that posts detection results from the page

## API Used
- None: language detection runs in the browser with the franc library

## Monetization
Flat subscription — $29/month for up to 1,000 detections/month and Zendesk integration; $79/month for 10,000 detections and multi-helpdesk support.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Zendesk API

## MVP Scope
Included in v1: text paste detection, language tagging, routing rule builder, volume dashboard, Zendesk webhook integration.
Out of scope: live translation, AI reply drafting in detected language, Intercom/Freshdesk integrations, mobile app.
