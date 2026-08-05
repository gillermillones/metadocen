import BarGraphLite from '@/app/ui/dashboard/bar-graph-lite';
import { fetch5ItemsByUserId } from '@/app/lib/data'
import { getSession } from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';

export default async function GraphSelector({ userId }: { userId: string }) {
    let id = userId;
    if(userId.localeCompare("self") == 0){
        const session = await getSession();
        id = session.userId;
    }
    const items = await fetch5ItemsByUserId(id);

    return(
        <div className="w-full md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Grafico de barras de propiedades de archivos
            </h2>
            <BarGraphLite items={items}/>
        </div>
    );
}