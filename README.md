## Overview

This project is a full-featured e-commerce website built with **Next.js 14**, designed to demonstrate advanced functionality and best practices using modern tools and libraries. It's a comprehensive learning project based on a step-by-step tutorial for building a production-ready application similar to Amazon.com.

## Features

- **Next.js 14 with Server Actions**: Learn how to call server actions from both server and client components.
- **TypeScript**: Fully typed codebase for safety and scalability.
- **Prisma ORM**: Perform database operations, manage complex transactions, and use client extensions to hook into queries.
- **MongoDB**: Used as the primary database with Prisma adapter support.
- **Authentication**: Implement login systems using NextAuth, Google OAuth, and anonymous cart sessions stored in cookies.
- **TailwindCSS + DaisyUI**: Create responsive, accessible, and customizable user interfaces with utility-first styling.
- **Anonymous Shopping Cart**: Persistent cart experience even for users who aren’t logged in.
- **Metadata with `generateMetadata`**: Fine-tune SEO and improve page previews across the site.
- **Performance Optimizations**: Use React’s cache function to deduplicate Prisma requests.
- **Deployment**: Deploy to Vercel with a clean configuration for production.
- **Developer Tooling**: Includes Prettier, ESLint, and VS Code extensions for Prisma and TailwindCSS to improve code quality and productivity.

## Tech Stack

- Next.js 14
- TypeScript
- Prisma + MongoDB
- NextAuth
- TailwindCSS
- DaisyUI
- Vercel

## Setup

To run the project locally:

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```
3. Set up your .env file with appropriate credentials for MongoDB and authentication
4. Run database migrations

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Start the development server

   ```bash
   npm run dev
   ```
