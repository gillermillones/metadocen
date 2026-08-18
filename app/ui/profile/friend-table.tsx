import { FullUser } from '@/app/lib/definitions';
import { RemoveFriend } from '@/app/ui/friends/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import Pagination from '@/app/ui/pagination';
import ItemsTable from '@/app/ui/items/table';
import { ItemTableSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchItemPagesUserId, fetchFilteredItemsUserId } from '@/app/lib/data';
import { getSession } from '@/app/lib/actions';
import { formatDateToLocal } from '@/app/lib/utils';

export default async function FriendProfileTable({ user, pageAct }: { user: FullUser; pageAct: number }) {
    const query = '';
    const session = await getSession();
    const totalPages = await fetchItemPagesUserId(query, user.id);
    const items = await fetchFilteredItemsUserId(query, pageAct, user.id);

  return (
    <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row w-full items-center justify-between pt-4">
            <h1 className={`${lusitana.className} text-2xl mb-6`}>Perfil</h1>
            <div className="flex justify-end gap-2">
                <RemoveFriend id={user.id} />
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-4 width-maxflex">
            <div className="rounded-md width-maxflex bg-gray-50 p-4 md:p-6">
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
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre completo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="peer block w-full rounded-md border border-gray-200 px-2 py-2 outline-2">
                          <h1>{user.fullname}</h1>
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
                          <h1>{formatDateToLocal(user.birthday)}</h1>
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
            </div>
            <div className="flex flex-row md:flex-col justify-evenly gap-2 mt-2">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper id={user.id} />
                </Suspense>
            </div>
        </div>
        <h1 className={`${lusitana.className} mt-4 text-2xl`}>Archivos publicos de {user.name}</h1>
        <Suspense key={query + pageAct} fallback={<ItemTableSkeleton />}>
            <ItemsTable items={items} idSession={session.userId} idUser={user.id}/>
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>
    </div>
  );
}