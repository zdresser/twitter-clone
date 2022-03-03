/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy'],
  },
  env: {
    REACT_APP_FIREBASE_KEY: process.env.REACT_APP_FIREBASE_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    Google_CLIENT_SECRET: process.env.Google_CLIENT_SECRET,
  },
}
