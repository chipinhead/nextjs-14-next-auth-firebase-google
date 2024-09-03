# NextJS + NextAuth + Firebase Template

This is a NextJS template that uses NextAuth and Firebase to support login with Google. It's an updated version of the project from [this video tutorial](https://www.youtube.com/watch?v=zrjybW3UKr8), modified to support the App Router.

## Getting Started

To set up this project:

1. Copy `.env.template` to `.env.local`
2. Watch [this section of the video](https://www.youtube.com/watch?v=zrjybW3UKr8&t=301s) about setting up Firebase authentication with Google
3. Fill in the credentials in your `.env.local` file

Then, run the development server:

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

## Expected Behavior

1. When not logged in, you should see a "Login" button in the top right of the header and a "Check API Status" button in the center of the page.
2. Clicking the "Check API Status" button when not logged in should return "not logged in".
3. Clicking "Login" in the header should direct you to log in with Google.
4. After logging in, you should see your name in the top right of the header.
5. Clicking "Check API Status" while logged in should return "logged in as: {your name}".
6. Clicking your name in the header should reveal a "Sign out" link, which when clicked signs the user out.

## Important Note

The client request made in `checkAPIAuthStatus` needs to have `credentials: 'include'` for the API to receive the session. You can see this implementation in `app/lib/api.ts`.

## Customizing the Theme

This project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.ts` file. Here's how to modify the color scheme:

1. Open `tailwind.config.ts` in your project root.
2. Locate the `theme.extend.colors` section:

```
typescript
colors: {
    'baby-blue': '#9dbed1',
    'teal': '#14829f',
    'misty-blue': '#d8e3ec',
    'midnight-blue': '#004f76',
    // Semantic color names
    'primary': '#004f76', // Midnight Blue
    'secondary': '#14829f', // Teal
    'background': '#d8e3ec', // Misty Blue
    'accent': '#9dbed1', // Baby Blue
}
```

# NextJS INFO

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.