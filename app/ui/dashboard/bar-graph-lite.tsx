import { valArr, generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { fetch5ItemsByUserId } from '@/app/lib/data'
import { getSession } from '@/app/lib/actions';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function BarGraphLite({ n, userId }: { n: number; userId: string }) {
  let id = userId;
  if(userId.localeCompare("self") == 0){
    const session = await getSession();
    id = session.userId;
  }
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(n);
  const items = await fetch5ItemsByUserId(id);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Grafico de barras de propiedades de archivos
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
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
                  height: `${(chartHeight / topLabel) * i[valArr[n].key]}px`,
                }}
              ></div>
              <p className="-rotate-90 w-full text-xs text-clip text-gray-400 sm:rotate-0">
                {i.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <h3 className="ml-2 text-sm text-gray-500 ">Propiedad {valArr[n].key}</h3>
        </div>
      </div>
    </div>
  );
}