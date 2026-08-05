'use client';

import { valArr } from '@/app/lib/utils';
import BarGraphLite from '@/app/ui/dashboard/bar-graph-lite';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';

export default function GraphSelector({ userId }: { userId: string }) {
    const [graph, setGraph] = useState<number>(0);
    const changeGraph = (n : number) => {setGraph(n)};

    return(
        <div>
            <BarGraphLite n={graph} userId={userId}/>
            <div>
                {valArr.map((i, index) => (
                    <button type="button" onClick={() => changeGraph(index)}>{i.key}</button>
                ))}
            </div>
        </div>
    );
}