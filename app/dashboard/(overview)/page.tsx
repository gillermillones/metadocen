import CardWrapper from '@/app/ui/dashboard/cards';
import LatestItems from '@/app/ui/dashboard/latest-items';
import UserSearch from '@/app/ui/dashboard/user-search';
import BarGraphLite from '@/app/ui/dashboard/bar-graph-lite';
import { valArr } from '@/app/lib/utils';
import { Suspense, useState } from 'react';
import { ChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina Principal',
};

export default function Page() {

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
        <Suspense fallback={<ChartSkeleton />}>
          <BarGraphLite n={6} userId={"self"}/>
          <div>
            {valArr.map((i) => (
              <button type="button">{i.key}</button>
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
}