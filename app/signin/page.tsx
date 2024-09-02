"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import React from 'react';

const SignInPage = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default SignInPage;