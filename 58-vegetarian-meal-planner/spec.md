# Vegetarian Meal Planner for Health Coaches

## Tagline
Build personalized weekly vegetarian meal plans for your clients in minutes, not hours.

## Target Market
Independent health coaches and registered dietitians with client rosters focused on plant-based or vegetarian nutrition.

## Problem
Health coaches spend hours each week manually building customized vegetarian meal plans that match each client's calorie targets, macros, and food preferences. Sourcing diverse, nutritionally balanced recipes without repeating the same meals is a constant challenge. Clients expect professional-looking plans but coaches lack a dedicated tool that is faster than a spreadsheet.

## Solution
A meal planning tool that lets health coaches input a client's calorie goal, dietary restrictions, and preferences, then generates a personalized 7-day vegetarian meal plan with recipes sourced from the Spoonacular API (with an optional key; TheMealDB otherwise). Plans can be saved as a PDF via print or opened as an email draft for the client.

## Core Features (MVP)
- Client profile management with calorie target and dietary exclusions
- 7-day meal plan generator using Spoonacular vegetarian recipe search
- Nutritional summary per day (calories, protein, carbs, fat)
- Plan customization — swap individual meals with alternatives
- PDF export (print dialog) and email draft to client (mailto, with an HTML download)

## API Used
- Spoonacular API — provides a large database of recipes with nutritional data, ingredient lists, dietary tags (vegetarian, vegan, gluten-free), and meal plan generation endpoints

## Monetization
SaaS subscription — $39/month for up to 10 active clients; $79/month for unlimited clients and white-label branded PDFs.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Spoonacular API

## MVP Scope
**Included in v1:** Client profiles, 7-day plan generation, nutritional summary, meal swap, PDF export via print, client email draft.
**Out of scope:** Grocery list generation, macro tracking app for clients, integration with fitness wearables, group meal planning for corporate wellness.
