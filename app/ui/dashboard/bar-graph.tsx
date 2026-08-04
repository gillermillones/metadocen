import { valArr, generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { fetchAllItemsByUserId } from '@/app/lib/data'
import { notFound } from 'next/navigation';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function BarGraph({ userId }: { userId: string }) {
  const chartHeight = 550;
  const { yAxisLabels, topLabel } = generateYAxis(11);
  const items = await fetchAllItemsByUserId(userId);
  if(items.length == 0){
    notFound();
  }
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
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Grafico de barras de propiedades de todos los archivos
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-16 mt-0 grid grid-cols-15 grid-flow-col items-end gap-1 rounded-md bg-white p-4 md:gap-1">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {valArr.map((i) => (
            <div key={i.key} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * itemValues[i.key]}px`,
                }}
              ></div>
              <p className="-rotate-90 w-full text-xs text-clip text-gray-400 sm:rotate-0">
                {i.key}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500 ">Valores medios de todos los archivos</h3>
        </div>
      </div>
    </div>
  );
}