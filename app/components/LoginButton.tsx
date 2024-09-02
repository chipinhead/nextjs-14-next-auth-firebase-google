'use client'

import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <button onClick={() => signIn()} style={{ padding: '0.5rem 1rem', backgroundColor: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Log In
    </button>
  )
}