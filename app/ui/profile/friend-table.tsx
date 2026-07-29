import { FullUser } from '@/app/lib/definitions';
import { RemoveFriend } from '@/app/ui/friends/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import Pagination from '@/app/ui/pagination';
import ItemsTable from '@/app/ui/items/table';
import { ItemTableSkeleton } from '@/app/ui/skeletons';
import { fetchItemPagesUserId, fetchFilteredItemsUserId } from '@/app/lib/data';
import { getSession } from '@/app/lib/actions';
import { formatDateToLocal } from '@/app/lib/utils';

export default async function FriendProfileTable({ user }: { user: FullUser }) {
    const query = '';
    const currentPage = 1;
    const session = await getSession();
    const totalPages = await fetchItemPagesUserId(query, user.id);
    const items = await fetchFilteredItemsUserId(query, currentPage, user.id);

  return (
    <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row w-full items-center justify-between pt-4">
            <h1 className={`${lusitana.className} text-2xl`}>Perfil</h1>
            <div className="flex justify-end gap-2">
                <RemoveFriend id={user.id} />
            </div>
        </div>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Correo electronico
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                          <h1>{user.email}</h1>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
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
            </div>
        <h1 className={`${lusitana.className} mt-4 text-2xl`}>{user.name}'s Public Files</h1>
        <Suspense key={query + currentPage} fallback={<ItemTableSkeleton />}>
            <ItemsTable items={items} idSession={session.userId} idUser={user.id}/>
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>
    </div>
  );
}