import sub from "date-fns/sub";
import add from "date-fns/add";

const padWeekly = (dataset: number[]) => {
  const datasetLength = dataset.length;
  if (datasetLength === 7) return dataset;
  else if (datasetLength > 7) {
    return dataset.reverse().slice(0, 6).reverse();
  } else {
    const padAmt = 7 - datasetLength;
    const dateStart = sub(dataset[0], { days: padAmt });
    const pad = Array(padAmt)
      .fill(0)
      .map((_, i) => add(dateStart, { days: i }))
      .map((d) => d.getTime());
    return [...pad, ...dataset];
  }
};

export default padWeekly;
