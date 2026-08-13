import LatestItems from '@/app/ui/dashboard/latest-items';
import UserSearch from '@/app/ui/dashboard/user-search';
import GraphSelectorLite from '@/app/ui/dashboard/graph-selector-lite';
import { getSession } from '@/app/lib/actions';
import { Suspense } from 'react';
import { ChartSkeleton, LatestItemsSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina Principal',
};

export default async function Page() {
  const session = await getSession();

  return (
    <main>
      <div className="flex flex-row justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Bienvenido, {session.name}
        </h1>
        <UserSearch />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<LatestItemsSkeleton />}>
          <LatestItems />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <GraphSelectorLite userId={"self"}/>
        </Suspense>
      </div>
    </main>
  );
}