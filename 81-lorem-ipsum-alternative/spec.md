# Lorem Ipsum Alternative Generator for Devs

## Tagline
Generate realistic, domain-specific placeholder text for your UI mockups in seconds.

## Target Market
Indie developers and small dev shops building SaaS products who need meaningful filler content during prototyping.

## Problem
Generic "Lorem ipsum" text makes mockups feel hollow and fails to expose real layout problems caused by content length. Developers waste time writing placeholder copy by hand or ship demos with jarring Latin text that confuses stakeholders. There is no quick tool tailored to specific app domains like e-commerce, HR, or finance.

## Solution
A web app that generates themed, context-aware placeholder text using the Metaphorpsum API, letting devs pick a domain (medical, legal, finance, SaaS, etc.) and instantly copy paragraph blocks, list items, or JSON data structures ready to paste into code.

## Core Features (MVP)
- Domain picker (medical, SaaS, legal, restaurant, real estate, news, finance, gaming)
- Paragraph, bullet list, headings, email, JSON, and SQL output modes
- One-click copy to clipboard
- JSON array output for seeding databases or Storybook
- Shareable permalink to regenerate the same content block

## API Used
- Metaphorpsum API — generates metaphor-rich, varied English filler sentences as a drop-in Lorem Ipsum replacement

## Monetization
Freemium — free tier limited to 50 generations/day; Pro plan at $7/month for unlimited generations, custom domains, and API access.

## Tech Stack Suggestion
Next.js + Vercel + Upstash Redis (rate limiting) + Tailwind CSS.

## MVP Scope
Included in v1: domain picker, six output modes, clipboard copy, JSON output, shareable links, rate-limited free tier.
Out of scope: custom fine-tuned models, team workspaces, browser extension, Figma plugin.
