# PlatePal – AI Food Picks

A chat assistant that recommends dishes from a menu database based on budget, number of people, diet, cuisine, spice level and allergies.

## How it works
1. **Understanding (Gemini):** the user's message is turned into structured preferences (budget, people, diet, cuisine, spice, allergens, dish keywords, refinements like "cheaper"). If Gemini is unavailable, a rule-based parser takes over.
2. **Rules (deterministic):** diet, allergies and budget are hard rules and are never relaxed. Cuisine, spice and dish are soft preferences; if nothing matches, they are loosened one at a time and the user is told which.
3. **Ranking:** by rating and match quality, one dish per restaurant where possible.
4. **Reply:** built only from database items, so the bot cannot suggest dishes that are not on the menu.

The side panel shows the preferences remembered so far, every rule applied, and whether Gemini or the fallback understood the request.

## Files
- `index.html`: UI, understanding, rules and ranking
- `menu.js`: sample menu database (40 dishes, 8 fictional restaurants)
- `api/gemini.js`: Vercel serverless proxy with automatic model fallback and an 8-second timeout

## Deploy on Vercel
1. Create a new GitHub repository and upload these files.
2. Import the repository in Vercel (no build settings needed).
3. In Vercel → Settings → Environment Variables, add `GEMINI_API_KEY`.
4. Redeploy. Without a key, the app still works using the rule-based fallback.
