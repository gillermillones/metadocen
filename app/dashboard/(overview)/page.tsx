import CardWrapper from '@/app/ui/dashboard/cards';
import LatestItems from '@/app/ui/dashboard/latest-items';
import UserSearch from '@/app/ui/dashboard/user-search';
import BarGraph from '@/app/ui/dashboard/bar-graph';
import { getSession } from '@/app/lib/actions';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
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
          Pagina Principal
        </h1>
        <UserSearch />
      </div>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestItems />
        </Suspense>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <BarGraph n={6} userId={session.userId}/>
        </Suspense>
      </div>
    </main>
  );
}