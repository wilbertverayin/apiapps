# Pokemon Merchandise Idea Generator

## Tagline
Turn any Pokemon into a product — instantly generate merchandise concepts, descriptions, and print-on-demand listings.

## Target Market
Small print-on-demand sellers and fan merchandise creators on Etsy, Redbubble, or Shopify who sell Pokemon-themed products.

## Problem
POD sellers targeting the Pokemon niche need a constant stream of fresh merchandise ideas to stay competitive, but manually researching each Pokemon's traits, types, and lore is time-consuming. Blank canvas seller paralysis means fewer listings and lower revenue. Many sellers run out of "obvious" designs and don't know which Pokemon or themes to explore next.

## Solution
A tool that lets sellers select or randomize a Pokemon, then generates a set of merchandise concepts (e.g., t-shirt tagline, mug quote, sticker description, tote bag angle) based on that Pokemon's type, moves, and lore pulled from the PokéAPI. Output is ready to paste into a POD listing.

## Core Features (MVP)
- Pokemon selector (search by name or random generator)
- Fetch Pokemon data: type, abilities, moves, flavor text via PokéAPI
- Merchandise concepts per Pokemon with titles and descriptions: template-based by default, OpenAI-generated when the user supplies an API key
- One-click copy of listing-ready text per concept
- Saved ideas library (stored in the browser)

## API Used
- PokéAPI — provides comprehensive Pokemon data including types, abilities, moves, evolution chains, and Pokedex flavor text entries for all 1000+ Pokemon

## Monetization
Freemium — 10 free generations per month; Pro at $12/month for unlimited generations, bulk batch mode, and Etsy listing format export.

## Tech Stack Suggestion
Next.js + Supabase + OpenAI API

## MVP Scope
In scope: Pokemon lookup, template and optional OpenAI concept generation, copy-to-clipboard, saved library. Out of scope: direct POD platform publishing integration, image generation for designs, trademark/copyright advisory in v1.
