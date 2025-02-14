This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Project Structure

This project follows a structured approach to ensure scalability and maintainability. Below is an overview of the folder structure:

### `/src`
- **`/app`**: Contains all routes and pages using the Next.js App Router.
- **`/components`**: Organized using Atomic Design (`atoms`, `molecules`, `organisms`, `templates`).
- **`/domains`**: Domain-specific logic (e.g., `auth`, `customer`). Each domain contains `constants`, `mappings`, `repositories`, `services`, `types`, and `validations`.
- **`/lib`**: Configuration for third-party libraries (e.g., React Query).
- **`/store`**: Global store implementation using `useSyncExternalStore`.
- **`/test`**: Test setup using Vitest and Testing Library.
- **`/utils`**: Utility functions and shared logic.

### Guidelines
1. **Components**: Use the Atomic Design structure for components.
2. **Domains**: Keep domain-specific logic in the `/domains` folder.
3. **State Management**: Use the global store in `/store` for shared state.
4. **Testing**: Write tests in the same directory as the component or utility being tested.
5. **Utilities**: Reuse utilities from `/utils` to avoid duplication.

For more details, refer to the specific folders and their READMEs (if available).

<pre>
/src
├── /app
│   ├── /(auth)                     # Auth-related routes (optional grouping)
│   ├── /(customer)                 # Customer-related routes (optional grouping)
│   ├── /api                        # API routes
│   ├── /layout.tsx                 # Root layout
│   ├── /page.tsx                   # Home page
│   ├── /loading.tsx                # Loading UI
│   ├── /error.tsx                  # Error UI
│   └── /not-found.tsx              # Not Found UI
│
├── /components
│   ├── /atoms                      # Atomic components (e.g., buttons, inputs)
│   ├── /molecules                  # Composed components (e.g., forms, cards)
│   ├── /organisms                  # Complex components (e.g., headers, sidebars)
│   └── /templates                  # Page templates (e.g., layouts for pages)
│
├── /domains
│   ├── /auth                       # Auth domain
│   │   ├── /constants              # Auth-related constants
│   │   ├── /mappings               # Auth-related data mappings
│   │   ├── /repositories           # Auth-related data fetching logic
│   │   ├── /services               # Auth-related business logic
│   │   ├── /types                  # Auth-related TypeScript types
│   │   └── /validations            # Auth-related validation logic
│   │
│   └── /customer                   # Customer domain
│       ├── /constants              # Customer-related constants
│       ├── /mappings               # Customer-related data mappings
│       ├── /repositories           # Customer-related data fetching logic
│       ├── /services               # Customer-related business logic
│       ├── /types                  # Customer-related TypeScript types
│       └── /validations            # Customer-related validation logic
│
├── /lib
│   ├── /react-query                # React Query configuration
│   └── /other-library              # Other library configurations
│
├── /store
│   └── index.ts                    # Global store using `useSyncExternalStore`
│
├── /test
│   └── setup.ts                    # Test setup using Vitest and Testing Library
│
└── /utils
    ├── /constants                  # Global constants
    ├── /data                       # Mock data or static data
    ├── /types                      # Global TypeScript types
    ├── /ui                         # UI-related utilities (e.g., theme, styles)
    ├── /validations                # Global validation utilities
    └── index.ts                    # Utility functions
</pre>
