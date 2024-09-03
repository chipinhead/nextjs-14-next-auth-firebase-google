'use client';

import { useState } from 'react';
import { checkAPIAuthStatus } from './lib/api';

export default function Home() {
  const [authStatus, setAuthStatus] = useState('');

  const handleCheckAuthStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    const status = await checkAPIAuthStatus();
    setAuthStatus(status);
  };

  return (
    <div>
      <form onSubmit={handleCheckAuthStatus}>
        <button type="submit">Check API Auth Status</button>
      </form>
      {authStatus && <p>{authStatus}</p>}
    </div>
  );
}
