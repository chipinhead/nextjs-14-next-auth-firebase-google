'use client';

import { useState } from 'react';
import { checkAuthStatus } from './lib/api';

export default function Home() {
  const [authStatus, setAuthStatus] = useState('');

  const handleCheckAuthStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    const status = await checkAuthStatus();
    setAuthStatus(status);
  };

  return (
    <div>
      <h1>Welcome to PodCliff</h1>
      <form onSubmit={handleCheckAuthStatus}>
        <button type="submit">Check Auth Status</button>
      </form>
      {authStatus && <p>{authStatus}</p>}
    </div>
  );
}
