# Sorcer - AI-powered Image Generation

Sorcer is a full-stack image generation app built with React + Vite on the front end and Express + Node + MongoDB on the back end. It offers user authentication, a credit system, AI image creation via Cloudflare Workers AI (FLUX.1-schnell), and a purchase flow using Coinbase OnChainKit.

## Key Features

- User account creation and login with JWT authentication
- Credit tracking for image generation usage
- AI image generation from text prompts using Cloudflare Workers AI (FLUX.1-schnell) — free for normal usage
- Downloadable generated images
- Payment plans to buy more credits
- Dark mode toggle and responsive UI
- Toast notifications for user feedback

## Repository Structure

- `/client` - React front-end application
  - `src/pages` - application pages: `Home`, `Result`, `BuyCredit`
  - `src/components` - reusable UI components
  - `src/context/AppContext.jsx` - global state, auth token handling, API calls
  - `src/assets` - static assets and plan/testimonial data
- `/server` - Express back-end API
  - `server.js` - application entry point
  - `config/mongodb.js` - MongoDB connection
  - `controllers` - request handlers for users and image generation
  - `middlewares/auth.js` - JWT authorization middleware
  - `models/userModel.js` - Mongoose user schema
  - `routes` - API routes for `/api/user` and `/api/image`

## Environment Variables

### Server
Create a `.env` file in `/server` with:

```env
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
CLOUDFLARE_ACCOUNT_ID=<your-cloudflare-account-id>
CLOUDFLARE_API_TOKEN=<your-cloudflare-api-token-with-workers-ai-access>
PORT=4000
```

Get both Cloudflare values from the [Cloudflare dashboard](https://dash.cloudflare.com/): the Account ID is on the dashboard's right sidebar, and the API token is created under **My Profile → API Tokens** (needs the "Workers AI" permission). Workers AI's free tier covers 10,000 neurons/day at no cost, which is enough for a solid number of images before anything is billed.

### Client
Create a `.env` file in `/client` with:

```env
VITE_BACKEND_URL=http://localhost:4000
```

## Setup & Run

1. Install server dependencies:

```bash
cd server
npm install
```

2. Install client dependencies:

```bash
cd ../client
npm install
```

3. Start the server:

```bash
cd ../server
npm run server
```

4. Start the client:

```bash
cd ../client
npm run dev
```

## Notes & Observations

- The back end stores user credit balance in MongoDB with a default of `5` credits.
- Image generation deducts one credit per prompt and uses Cloudflare Workers AI's FLUX.1-schnell model.
- User auth requires a `token` HTTP header on protected API routes.
- The front-end uses `/api/user/credits` to retrieve credit balance and user data.
- The `BuyCredit` page uses Coinbase OnChainKit's `Buy` component and then updates credits via `/api/user/add-credits`.
- The root `package.json` is minimal and the main work happens in the `/client` and `/server` folders.

## Potential Improvements

- Ensure the API returns user `_id` after login/credits so payment credit updates have the correct user reference.
- Add a local development `.env.example` and expand README with production deployment guidance.

## Contact

For development and debugging, use the server logs and browser console, and verify `.env` values before starting the apps.
