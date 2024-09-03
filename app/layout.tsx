import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from './SessionProvider';
import React from 'react';
import LoginButton from './components/LoginButton'; // Create this component
import AccountMenu from './components/AccountMenu'; // Add this import

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-primary p-4 flex justify-between items-center">
          <h1 className="text-white m-0">YOUR APP SUCKS</h1>
          <AccountMenu session={session} />
        </header>
        <main className="flex-grow bg-background flex items-center justify-center">
          <SessionProvider session={session}>{children}</SessionProvider>
        </main>
      </body>
    </html>
  );
}
