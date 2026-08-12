import { FriendListSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import FriendList from '@/app/ui/friends/friend-list';
import { UpdateProfile, UpdatePassword } from '@/app/ui/profile/buttons';
import { getFullUserById } from '@/auth';
import { formatDateToLocal } from '@/app/lib/utils'

export default async function OwnProfileTable({ id }: { id: string }) {
  const user = await getFullUserById(id);

  return (
    <div className="flex flex-col w-full justify-between">
        <h1 className={`${lusitana.className} text-2xl mb-6`}>Tu Perfil</h1>
        <div className="flex flex-col justify-start">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Correo electronico
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1>{user.email}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre de usuario
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1>{user.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                        Genero
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1>{user.gender}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="birthday" className="mb-2 block text-sm font-medium">
                        Fecha de nacimiento
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1>{user.birthday && formatDateToLocal(user.birthday)}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="workplace" className="mb-2 block text-sm font-medium">
                        Lugar de trabajo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
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
                          className="peer block w-full rounded-md border border-gray-200 px-2 py-2 text-sm outline-2 placeholder:text-gray-500"
                          defaultValue="sample"
                          disabled
                      />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-4 my-2">
                <UpdateProfile id={user.id} />
                <UpdatePassword id={user.id} />
            </div>
        </div>
        <Suspense fallback={<FriendListSkeleton />}>
            <FriendList id={user.id}/>
        </Suspense>
    </div>
  );
}