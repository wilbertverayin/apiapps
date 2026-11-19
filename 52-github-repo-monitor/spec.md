# GitHub Repo Monitor for Tech Recruiters

## Tagline
Spot top engineering talent by tracking the GitHub activity of the developers you want to hire.

## Target Market
Boutique technical recruiting firms and in-house talent acquisition teams at tech companies hiring software engineers.

## Problem
Tech recruiters struggle to distinguish active, skilled developers from those with impressive-looking but stale profiles. Manually revisiting GitHub profiles to check for new commits, star growth, or notable contributions is time-consuming and unsustainable at scale. Recruiters miss the right moment to reach out when a developer goes active after a quiet period.

## Solution
A candidate monitoring tool that lets recruiters add GitHub usernames to watchlists and tracks repo activity, star counts, language breakdown, and contribution trends. Recruiters can run a Check Now alert scan to see when a watched developer pushes a notable project or surges in activity, the ideal engagement signal.

## Core Features (MVP)
- Candidate watchlist — add GitHub usernames to track
- Profile snapshot: top repos, languages, star counts, recent commit activity
- Activity trend graph showing commit frequency over the last 90 days
- Check Now alert when a watched candidate creates a new public repo or exceeds configurable weekly commit threshold
- Notes field per candidate for recruiter context

## API Used
- GitHub API — provides public repository data, commit history, star counts, language statistics, and user profile information for any public GitHub account

## Monetization
SaaS subscription — $49/month for up to 50 watched candidates; $99/month for unlimited candidates and team access for up to 5 recruiters.

## Tech Stack Suggestion
Next.js + Supabase + Resend

## MVP Scope
**Included in v1:** GitHub username watchlist, profile and repo snapshot, activity trend graph, new-repo and commit-spike alerts, per-candidate notes.
**Out of scope:** LinkedIn integration, ATS sync, candidate messaging, private repo access, AI candidate scoring.
