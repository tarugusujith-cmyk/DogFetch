# Good Dog, Fresh Pin — Fetch API Mini Project

A React + Vite + TypeScript app that fetches a random dog photo from the
[Dog CEO API](https://dog.ceo/dog-api/) using the native **Fetch API**, and
displays it as a photo pinned to a board, polaroid-style.

## Features

- Fetches `https://dog.ceo/api/breeds/image/random` with the Fetch API.
- Parses the breed name out of the returned image URL for the caption.
- Shows a **loading** state (spinner inside a blank polaroid) while fetching.
- Catches request/API errors with `try...catch` and shows an error note.
- "Fetch another dog" button re-triggers the request on demand.
- Clean, responsive, hand-styled UI (no CSS framework).
- Logic separated from presentation: a `useRandomDog` hook owns
  loading/error/data state, `api/dog.ts` owns the fetch + parsing, and
  components stay focused on rendering.

## Project structure

```
src/
  api/
    dog.ts               # fetch() call + breed-name parsing, throws on failure
  hooks/
    useRandomDog.ts       # loading / error / data state + fetchNew()
  components/
    DogBoard.tsx          # picks Loader / ErrorState / photo based on state
    DogPolaroid.tsx        # the pinned photo + caption
    Loader.tsx             # blank polaroid with spinner shown while loading
    ErrorState.tsx         # pinned error note
  types.ts                 # DogApiResponse / DogImage TypeScript types
  App.tsx / App.css         # page layout & styling
  index.css                 # design tokens, resets, fonts
```

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Tech

- React 19 + TypeScript
- Vite
- Fetch API (native, no Axios)
- Plain CSS (custom design system, no Tailwind)
