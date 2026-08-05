'use client';

import { valArr, generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';
import { ItemData } from '@/app/lib/definitions';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function BarGraphLite({ items }: { items: ItemData[] }) {
  const chartHeight = 350;
  const [graph, setGraph] = useState<number>(0);
  const changeGraph = (n : number) => {setGraph(n)};
  const { yAxisLabels, topLabel } = generateYAxis(graph);

  return (
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex flex-row justify-between gap-1">
          {valArr.map((i, index) => (
            <button type="button" onClick={() => changeGraph(index)}>{i.key}</button>
          ))}
        </div>
        <div className="sm:grid-cols-6 mt-0 grid grid-cols-5 items-end gap-1 rounded-md bg-white p-4 md:gap-2">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          {items.map((i) => (
            <div key={i.name} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * i[valArr[graph].key]}px`,
                }}
              ></div>
              <p className="-rotate-90 w-full text-xs truncate text-gray-400 sm:rotate-0">
                {i.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500 ">Propiedad {valArr[graph].key}</h3>
        </div>
      </div>
  );
}