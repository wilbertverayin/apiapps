# Wikipedia Article Summarizer for Researchers

## Tagline
Turn any Wikipedia article into a structured research brief in seconds, not hours.

## Target Market
Independent researchers, academic consultants, and market research firms who regularly synthesize background information for reports and client briefs.

## Problem
Researchers waste significant time reading full Wikipedia articles to extract the core facts, key dates, and notable entities relevant to their specific research question. Copying, pasting, and reformatting content into structured briefs is repetitive and error-prone. When dozens of articles must be processed for a single project, the manual effort becomes a serious productivity bottleneck.

## Solution
A research assistant that accepts a Wikipedia article title or URL, fetches the intro extract, categories, and links via the Wikipedia API, and returns a structured brief with a summary, key facts, categories, related topics, and a source link, ready to export as a document.

## Core Features (MVP)
- Article lookup by title or Wikipedia URL
- Rule-based structured brief (summary, key facts, categories, related topics)
- Project workspace to organize briefs by research project
- Export brief as PDF (print) or Markdown
- Batch mode — submit a list of article titles and receive all briefs in one export

## API Used
- Wikipedia API — provides full article content, summaries, sections, links, and metadata for any Wikipedia article in any language via the MediaWiki REST API

## Monetization
Freemium — free for 10 summaries/month; Pro at $15/month for unlimited summaries, batch mode, and PDF/Markdown export.

## Tech Stack Suggestion
Next.js + Supabase + OpenAI API (for structured summarization) + Resend

## MVP Scope
**Included in v1:** Article lookup, rule-based brief generation, project workspace, PDF and Markdown export, batch mode up to 20 articles.
**Out of scope:** Browser extension, real-time Wikipedia edit monitoring, citation management integration (Zotero, Mendeley), multi-language brief translation.
