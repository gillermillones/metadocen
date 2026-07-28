import { FriendListSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import FriendList from '@/app/ui/friends/friend-list';
import UpdateProfile from '@/app/ui/profile/buttons';
import { getFullUserById } from '@/auth';

export default async function OwnProfileTable({ id }: { id: string }) {
  const user = await getFullUserById(id);

  return (
    <div className="flex flex-col w-full justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Your Profile Page</h1>
        <div>
            <h1>Email: {user.email}</h1>
            <h1>Username:{user.name}</h1>
            <h1>Gender:{user.gender}</h1>
            <h1>Birthday:{user.birthday}</h1>
            <h1>Workplace:{user.workplace}</h1>
            <UpdateProfile id={user.userId} />
        </div>
        <Suspense fallback={<FriendListSkeleton />}>
            <FriendList id={user.userId}/>
        </Suspense>
    </div>
  );
}