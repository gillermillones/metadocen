import { valArr, generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { fetchItemByUserId } from '@/app/lib/data'

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function BarGraph ({ n, userId }: { n: number; userId: string }) {
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(n);
  const items = await fetchItemByUserId(userId);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Grafico de barras de propiedades de archivos
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
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
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
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