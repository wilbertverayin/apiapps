# Password Strength Checker Widget

## Tagline
A real-world breach-aware password strength meter that checks a password as you type.

## Target Market
Small SaaS founders and indie developers who need a production-ready password UX component without building it from scratch.

## Problem
Built-in browser password meters only check character rules and ignore whether a password has actually been compromised in a data breach. Developers either skip strength feedback entirely or ship naive rule-based meters that give a false sense of security. Integrating HaveIBeenPwned checks from scratch requires CORS-safe k-anonymity hashing that most small teams get wrong.

## Solution
A web page providing real-time password strength scoring combined with a k-anonymity HaveIBeenPwned lookup to flag genuinely compromised passwords, with a visual meter and messaging.

## Core Features (MVP)
- Real-time strength scoring (zxcvbn algorithm)
- HaveIBeenPwned k-anonymity API check while typing, debounced (no full password sent)

## API Used
- HaveIBeenPwned Pwned Passwords API — checks whether a password hash prefix has appeared in known breach datasets without exposing the full password

## Monetization
Usage-based SaaS — free up to 10,000 checks/month; Growth at $19/month for 250,000 checks; Business at $79/month for unlimited checks and white-label branding removal.

## Tech Stack Suggestion
Next.js (docs site) + Cloudflare Workers (edge proxy for HIBP API) + Stripe + npm package.

## MVP Scope
Included in v1: strength meter, HIBP check.
Out of scope: Vue/Angular packages, SSO, team seats, audit log exports.
