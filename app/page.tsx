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
    <div className="text-center">
      <form onSubmit={handleCheckAuthStatus}>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Check API Auth Status
        </button>
      </form>
      {authStatus && <p className="mt-4">{authStatus}</p>}
    </div>
  );
}
