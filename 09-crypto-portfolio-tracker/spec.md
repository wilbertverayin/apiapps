# Crypto Portfolio Tracker for SMBs

## Tagline
Track your business crypto holdings, P&L, and capital gains in one clean dashboard, no trading jargon required.

## Target Market
Small businesses and freelancers who accept or hold cryptocurrency as part of their treasury or client payments.

## Problem
Small businesses holding crypto assets struggle to track portfolio value, realized gains, and tax exposure without resorting to complex trading tools designed for retail investors. Accounting for crypto income requires accurate cost-basis and price history, which most SMBs lack. There is no simple, business-focused crypto portfolio tool that speaks the language of accountants.

## Solution
The app lets businesses log crypto holdings and transactions, then uses live price data to calculate current portfolio value, unrealized P&L, and estimated capital gains. Transactions are exportable as CSV for accountants.

## Core Features (MVP)
- Manual transaction log (buy, receive, spend) with date, amount, and coin
- Live portfolio valuation using current market prices
- Unrealized and realized P&L calculation per asset
- Estimated capital gains summary (short-term vs long-term)
- Exportable transaction report (CSV) for accountants

## API Used
- CoinGecko API — provides real-time and historical cryptocurrency price data, market cap, and coin metadata for 10,000+ assets

## Monetization
Flat subscription — $19/month for up to 3 wallets and 500 transactions; $49/month for unlimited transactions and accountant sharing link.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
Included in v1: manual transaction entry, live price valuation, P&L calculation, capital gains summary, CSV export.
Out of scope: wallet address auto-sync, exchange API connections, DeFi protocol tracking, real-time price alerts.
