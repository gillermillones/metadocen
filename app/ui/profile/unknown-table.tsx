import { User } from '@/app/lib/definitions';
import { AddFriend, RemoveFriend } from '@/app/ui/friends/buttons';
import { lusitana } from '@/app/ui/fonts';

export default async function UnknownProfileTable({ user, requested }: { user: User; requested: boolean }) {

  return (
    <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row w-full items-center justify-between pt-4">
            <h1 className={`${lusitana.className} text-2xl mb-6`}>Perfil</h1>
                {requested ? (
                    <div className="flex justify-end gap-2">
                        <p className="pt-1">Solicitud enviada</p>
                        <RemoveFriend id={user.id} />
                    </div>
                ):(
                    <div className="flex justify-end gap-2">
                        <AddFriend id={user?.id} />
                    </div>
                )}
        </div>
        <div className="flex flex-row justify-start">
            <div className="width-maxflex rounded-md bg-gray-50 p-4 md:p-6">
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
            </div>
        </div>
    </div>
  );
}