import BarGraph from '@/app/ui/dashboard/bar-graph';
import { fetchAllItemsByUserId } from '@/app/lib/data'
import { notFound } from 'next/navigation';
import { lusitana } from '@/app/ui/fonts';

export default async function GraphSelector({ userId }: { userId: string }) {
    const items = await fetchAllItemsByUserId(userId);
    if(items.length == 0){
        notFound();
    }

    return(
        <div className="w-full md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Grafico de barras de valores de todos los archivos
            </h2>
            <BarGraph items={items}/>
        </div>
    );
}