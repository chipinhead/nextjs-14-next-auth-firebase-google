import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from './SessionProvider';
import React from 'react';
import LoginButton from './components/LoginButton'; // Create this component

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
      <body style={{ backgroundColor: '#ccc' }}>
        <header style={{ backgroundColor: '#004f76', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'white', margin: 0 }}>YOUR APP SUCKS</h1>
          {session ? (
            <span style={{ color: 'white' }}>Sup! {session.user?.name}</span>
          ) : (
            <LoginButton />
          )}
        </header>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
