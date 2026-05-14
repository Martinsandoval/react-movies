# Movies Store

## _Martin Sandoval_

## Installation

1. Get a free API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api).

2. Copy `.env.example` to `.env.local` and set your key:

```sh
cp .env.example .env.local
# then edit .env.local and replace the placeholder with your API key
```

3. Install dependencies and start the dev server:

```sh
npm install
npm start
```

Open the browser and navigate to localhost:3000.

## Production Build

```sh
npm run build
```

The optimized build is output to `/build`. Set `REACT_APP_API_KEY` in your hosting platform's environment variables before deploying.
