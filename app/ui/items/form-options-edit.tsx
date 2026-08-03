export default function FormOptionsEdit({ field, num, numOpt, color  }: { field: string, num: number; numOpt: number; color: string }) {
    const colorVal = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    const elem = [];
    if(numOpt < 1){
        return;
    }
    for (let i = 1; i <= numOpt; i++) {
        elem.push(i);
    }

    return (
        <div className="width-maxflex">
            <legend className="mb-2 block text-sm font-medium">
                Elige el valor {field}
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                <div className="flex gap-4 justify-center" aria-describedby={`${field}-error`}>
                    {elem.map((n) => (
                        <div className="flex items-center">
                            <input
                                id={`${field}-${n}`}
                                name={field}
                                type="radio"
                                value={n}
                                defaultChecked={num === n}
                                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                                htmlFor={`${field}-${n}`}
                                className={`ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-${color}-${colorVal[Math.floor((colorVal.length/2)-(numOpt/2)) + (n - 1)]} px-3 py-1.5 text-sm font-medium font-outline-025 text-white`}
                            >
                                {n}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

    