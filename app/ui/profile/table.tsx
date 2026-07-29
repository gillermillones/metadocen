import { FriendListSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import FriendList from '@/app/ui/friends/friend-list';
import UpdateProfile from '@/app/ui/profile/buttons';
import { getFullUserById } from '@/auth';
import { formatDateToLocal } from '@/app/lib/utils'

export default async function OwnProfileTable({ id }: { id: string }) {
  const user = await getFullUserById(id);

  return (
    <div className="flex flex-col w-full justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Your Profile Page</h1>
        <div className="flex flex-row justify-between">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{user.email}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Nombre de usuario
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{user.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Genero
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{user.gender}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="birthday" className="mb-2 block text-sm font-medium">
                        Fecha de nacimiento
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{formatDateToLocal(user.birthday)}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="workplace" className="mb-2 block text-sm font-medium">
                        Lugar de trabajo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{user.workplace}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                        Contraseña
                    </label>
                    <div className="relative mt-2 rounded-md">
                      <input
                          type="password"
                          id="password"
                          name="password"
                          defaultValue="sample"
                          disabled
                      />
                    </div>
                </div>
            </div>
            <UpdateProfile id={user.id} />
        </div>
        <Suspense fallback={<FriendListSkeleton />}>
            <FriendList id={user.id}/>
        </Suspense>
    </div>
  );
}