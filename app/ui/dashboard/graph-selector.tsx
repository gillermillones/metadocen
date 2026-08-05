import BarGraphLite from '@/app/ui/dashboard/bar-graph-lite';
import { fetch5ItemsByUserId } from '@/app/lib/data'
import { getSession } from '@/app/lib/actions';

export default async function GraphSelector({ userId }: { userId: string }) {
    let id = userId;
    if(userId.localeCompare("self") == 0){
        const session = await getSession();
        id = session.userId;
    }
    const items = await fetch5ItemsByUserId(id);

    return(
        <div>
            <BarGraphLite items={items}/>
        </div>
    );
}