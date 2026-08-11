type ItemProperty = | 'description'
                    | 'quality'
                    | 'capacity'
                    | 'adaptable'
                    | 'interaction'
                    | 'motivation'
                    | 'design'
                    | 'reusable'
                    | 'portable'
                    | 'toughness'
                    | 'structure'
                    | 'navigation'
                    | 'operable'
                    | 'av_accessible'
                    | 'text_accessible';

export const valArr: { key: ItemProperty; value: number }[] = [
                {key: 'description', value: 6}, 
                {key: 'quality', value: 7}, 
                {key: 'capacity', value: 4}, 
                {key: 'adaptable', value: 5}, 
                {key: 'interaction', value: 5}, 
                {key: 'motivation', value: 5}, 
                {key: 'design', value: 8}, 
                {key: 'reusable', value: 3}, 
                {key: 'portable', value: 5}, 
                {key: 'toughness', value: 4}, 
                {key: 'structure', value: 4}, 
                {key: 'navigation', value: 11}, 
                {key: 'operable', value: 6}, 
                {key: 'av_accessible', value: 7}, 
                {key: 'text_accessible', value: 7}
];

export const colors = [
              "rose", 
              "red", 
              "orange", 
              "yellow", 
              "lime", 
              "green", 
              "emerald", 
              "cyan", 
              "indigo", 
              "purple", 
              "fuchsia", 
              "pink", "rose", 
              "slate", 
              "stone"
];

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'es',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (n: number) => {
  let num = n;
  if(num > 14){
    num = 14;
  }else if(num < 0){
    num = 0;
  }
  const yAxisLabels = [];
  const topLabel = valArr[num].value;

  for (let i = topLabel; i >= 0; i -= 1) {
    yAxisLabels.push(`${i}`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
