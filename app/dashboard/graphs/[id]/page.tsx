import { getSession } from '@/app/lib/actions';
import { Metadata } from 'next';
import { getUserById } from '@/auth';
import { notFound, forbidden } from 'next/navigation';
import { ChartSkeleton } from '@/app/ui/skeletons';
import BarGraph from '@/app/ui/dashboard/bar-graph';
import { areWeFriends } from '@/app/lib/data';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Graficas',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const user = await getUserById(id);
  if (!user) {
    notFound();
  }
  const session = await getSession();
  const friendship = await areWeFriends(session.userId, id);
  if(!friendship && (id.localeCompare(session.userId) != 0)){
    forbidden();
  }

  return (
    <main>
        <div className="flex w-full items-center justify-between pt-4">
            <Suspense fallback={<ChartSkeleton />}>
                <BarGraph userId={id}/>
            </Suspense>
        </div>
    </main>
  );
}