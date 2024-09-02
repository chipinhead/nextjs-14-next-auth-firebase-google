import { useSession, signIn } from "next-auth/react";

const ProtectedPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view this page</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.name}</p>
    </div>
  );
};

export default ProtectedPage;