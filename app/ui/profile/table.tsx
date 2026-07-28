import { SessionData } from '@/app/lib/session';
import { FriendListSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import FriendList from '@/app/ui/friends/friend-list';
import UpdateProfile from '@/app/ui/profile/buttons';
import Link from 'next/link';

export default async function OwnProfileTable({ session }: { session: SessionData }) {

  return (
    <div className="flex flex-col w-full justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Your Profile Page</h1>
        <div>
            <h1>Email: {session.email}</h1>
            <h1>User ID:{session.userId}</h1>
            <UpdateProfile id={session.userId} />
        </div>
        <Suspense fallback={<FriendListSkeleton />}>
            <FriendList id={session.userId}/>
        </Suspense>
    </div>
  );
}