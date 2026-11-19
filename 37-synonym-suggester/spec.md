# Synonym Suggester for Non-Native Writers

## Tagline
Write with confidence in English, get synonym suggestions with formality notes to help you pick the right word.

## Target Market
Non-native English-speaking professionals and freelancers — particularly in Europe and Southeast Asia — who write business emails, content, or proposals in English and want to avoid repetition and sound more natural.

## Problem
Non-native English writers often over-rely on a limited vocabulary and repeat the same words, making their writing feel monotonous or unnatural. Standard thesaurus tools return word lists without context, leading to awkward substitutions that native speakers immediately notice. There is no tool that explains the nuance between synonyms and recommends the most natural choice for a given context.

## Solution
A web app where users paste a sentence or paragraph, click a word, and receive synonym suggestions ranked by Datamuse score, with a brief rule-based note on the formality of each of the top options (e.g., "use 'obtain' in formal writing, 'get' in casual communication").

## Core Features (MVP)
- Click a word in pasted text to fetch synonyms
- Synonyms ranked by Datamuse score
- Rule-based nuance note for top 3 synonyms (formality level, context note)
- One-click word replacement in the text editor
- Register filter (formal, informal, slang)

## API Used
- Datamuse API: provides synonyms, related words, and antonyms with frequency data

## Monetization
Freemium — 30 synonym lookups/day free; Pro at $9/month for unlimited lookups, nuance explanations, formality mode, and text history.

## Tech Stack Suggestion
Next.js + Supabase + OpenAI API (for nuance explanations)

## MVP Scope
In scope: text editor with click-to-lookup, synonym list, nuance notes, one-click replacement, register filter. Out of scope: full grammar/spell check, browser extension, real-time as-you-type suggestions, multi-language support in v1.
