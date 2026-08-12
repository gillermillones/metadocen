'use client';

import { valArr, generateYAxis } from '@/app/lib/utils';
import { colors } from '@/app/lib/utils';
import { useState } from 'react';
import { ItemData } from '@/app/lib/definitions';
import clsx from 'clsx';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function BarGraph({ items }: { items: ItemData[] }) {
  const chartHeight = 550;
  const [graph, setGraph] = useState<number>(-1);
  const changeGraph = (n : number) => {setGraph(n)};
  const { yAxisLabels, topLabel } = generateYAxis(11);
  const itemValues: Record<string, number> = {};
  let aux = 0;
  for (let j = 0; j < 15; j++) {
    aux = 0;
    items.forEach((item) => {
        aux += item[valArr[j].key];
    });
    itemValues[valArr[j].key] = aux / items.length;
  }

  return (
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid grid-cols-16 grid-flow-col items-end gap-1 rounded-md bg-white p-4 overflow-x-auto">
          <div
            className="mb-6 flex-col justify-between text-sm text-gray-400 flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          {valArr.map((i, index) => (
            <div key={i.key} className="flex flex-col items-center gap-2">
              <p className="text-xs text-gray-500">
                {graph === -1 ? Math.round(itemValues[i.key]*100)/100 : items[graph][i.key]}
              </p>
              <div
                className={`w-full rounded-md bg-${colors[index]}-400`}
                style={graph === -1 ? ({
                    height: `${(chartHeight / topLabel) * itemValues[i.key]}px`,
                  }) : ({
                    height: `${(chartHeight / topLabel) * items[graph][i.key]}px`,
                  })
                }
              ></div>
              <p className="w-full text-xs text-clip text-gray-400">
                {i.key}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-1">
          <button type="button" onClick={() => changeGraph(-1)} className={clsx(
                'rounded-md border p-1 bg-gray-100 hover:bg-gray-500', 
              {
                'bg-gray-500': graph === -1,
              },
            )}>
              Todos
          </button>
          {items.map((i, index) => (
            <button type="button" onClick={() => changeGraph(index)} className={clsx(
                'rounded-md border p-1 bg-gray-100 hover:bg-gray-500', 
              {
                'bg-gray-500': graph === index,
              },
            )}>
              {i.name}
            </button>
          ))}
        </div>
      </div>
  );
}