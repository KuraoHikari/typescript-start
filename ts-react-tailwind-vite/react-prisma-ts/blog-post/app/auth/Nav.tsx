import Link from 'next/link';
import Login from './Login';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Logged from './Logged';

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ file: Nav.tsx:8 ~ Nav ~ session:', session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={'/'}>
        <h1 className="font-bold text-lg">SendIt.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session && <Login />}
        {session && <Logged image={session?.user?.image || ''} />}
        {/* <Login /> */}
      </ul>
    </nav>
  );
}
