# Rhyme Finder for Copywriters

## Tagline
Find the perfect rhyme in seconds — built for taglines, jingles, and ad copy that actually sticks.

## Target Market
Freelance copywriters, advertising creatives, and marketing teams at SMBs that need catchy rhyming taglines, jingle lyrics, or product naming brainstorms.

## Problem
Copywriters brainstorming rhyming taglines or jingle copy waste time cycling through mental word associations or cluttered rhyme sites full of irrelevant results. Most rhyme tools return every possible rhyme with no filtering by syllable count, word frequency, or semantic relevance. There is no tool purpose-built for advertising copy use cases.

## Solution
A focused rhyme-finding tool where copywriters enter a word and instantly get rhyme suggestions filtered by syllable count and limited to the top-scoring results. Results are displayed in a copywriter-friendly grid for fast scanning and selection.

## Core Features (MVP)
- Rhyme lookup with results grouped by syllable count
- Syllable count filter to match meter
- Result limit (top 20, top 50, all) ranked by Datamuse score
- Near-rhyme and sounds-like suggestion tabs
- Copy-to-clipboard for individual words or full result sets

## API Used
- Datamuse API — provides word lookup including rhymes, near-rhymes, homophones, and related words with frequency scores and syllable counts, specifically designed for creative writing tools

## Monetization
Freemium — unlimited lookups free; Pro at $6/month for saved project boards, batch rhyme lookup for word lists, and phonetic similarity slider.

## Tech Stack Suggestion
Next.js + Tailwind CSS + Vercel (no backend needed for core lookups)

## MVP Scope
In scope: perfect and near rhyme lookup, syllable filter, result limit, copy-to-clipboard, basic saved lists. Out of scope: AI-generated tagline suggestions using rhymes, full jingle lyric builder, team collaboration boards in v1.
