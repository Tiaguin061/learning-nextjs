import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version: '0.1.0'
    }
  }
);

export const prices_id = 'price_1KvMEvD3Try4VPfGgV5sfL32';