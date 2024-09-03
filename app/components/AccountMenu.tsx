import { Session } from 'next-auth';
import LoginButton from './LoginButton';

interface AccountMenuProps {
  session: Session | null;
}

export default function AccountMenu({ session }: AccountMenuProps) {
  return (
    <>
      {session ? (
        <span className="text-white">Sup! {session.user?.name}</span>
      ) : (
        <LoginButton />
      )}
    </>
  );
}
