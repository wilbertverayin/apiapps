# Stock Watchlist Alert Tool

## Tagline
Monitor your key stocks and get alerted the moment price, volume, or percentage shifts matter.

## Target Market
Small business owners, independent financial advisors, and bootstrapped investors who track a focused list of equities without using a full brokerage platform.

## Problem
Retail investors and SMB owners who hold a small number of stocks need timely alerts without wading through the noise of full trading platforms. Free brokerage alert tools are basic, often require an active account, and lack customizable multi-condition triggers. Missing a significant move in a watched stock can cost real money.

## Solution
Users build a personal watchlist of stocks and configure alert rules with flexible conditions: price crossing a threshold, volume spikes, or daily percentage moves. Triggered alerts appear in the app and can be opened as an email draft.

## Core Features (MVP)
- Stock watchlist with up to 20 tickers and real-time quote display
- Alert rule builder: price threshold, % change, volume spike triggers
- Triggered alerts log with an email draft option
- Performance chart (up to 90 days) across watchlist tickers
- Watchlist summary opened as an email draft on demand

## API Used
- Yahoo Finance chart API (via the allorigins.win CORS proxy): provides real-time and historical stock quotes

## Monetization
Freemium — free for 5 tickers and email alerts only; Pro at $15/month for 20 tickers, SMS alerts, and daily digest.

## Tech Stack Suggestion
Next.js + Supabase + Resend + Twilio

## MVP Scope
Included in v1: watchlist management, price/percentage alert rules, triggered alerts log with email draft, 90-day chart, on-demand summary email draft.
Out of scope: options/futures data, portfolio P&L tracking, news sentiment integration, brokerage account linking.
