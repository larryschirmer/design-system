import React, { useRef, useMemo, useEffect } from "react";
import merge from "lodash/merge";
import { select } from "d3-selection";
import { line } from "d3-shape";

import { d3, padWeekly } from "../../../utils";

import styles from "./InlineFreqGraph.module.scss";

const { makeTimeScale, makeLinearScale, processBounds, makeAccessor } = d3;

export const defaultDimension = {
  width: 0,
  height: 0,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

export type Dataset = {
  amt: number;
  dt: number;
};

export type Props = {
  data: string[];
  color: string;
};

const InlineFreqGraph = ({ data, color }: Props) => {
  const svgRef = useRef<SVGPathElement>(null);
  const xAccessor = makeAccessor<"dt", number>("dt");
  const yAccessor = makeAccessor<"amt", number>("amt");

  const dimensions = useMemo(() => {
    return processBounds(
      merge({}, defaultDimension, { width: 100, height: 10 })
    );
  }, []);

  const dataset = useMemo(() => {
    const dateMillis = data.map((date) => new Date(date).getTime());

    const reducedDates = dateMillis
      .reduce<{ dt: number; amt: number }[]>((prog, date) => {
        const [last, ...prevData] = prog.reverse();
        const isUpdate = last?.dt === date;

        const lastUpdate = isUpdate
          ? { dt: date, amt: last.amt + 1 }
          : { date, dt: date, amt: 1 };

        return isUpdate ? [...prevData, lastUpdate] : [...prog, lastUpdate];
      }, [])
      .sort((a, b) => a.dt - b.dt);

    const { dates, amts } = reducedDates.reduce<{
      dates: number[];
      amts: number[];
    }>(
      (prog, { dt, amt }) => ({
        dates: [...prog.dates, dt],
        amts: [...prog.amts, amt],
      }),
      { dates: [], amts: [] }
    );

    return new Array(7).fill({}).map((_, idx) => {
      const datesWeekly = padWeekly(dates);
      const amtsWeekly = new Array(7)
        .fill(0)
        .map((_, i) => amts[amts.length - 1 - i] ?? 0)
        .reverse();

      return { dt: datesWeekly[idx], amt: amtsWeekly[idx] ?? 0 };
    });
  }, [data]);

  const xScale = useMemo(() => {
    const range = { lowest: 0, highest: dimensions.boundedWidth };
    return makeTimeScale<"dt">(dataset, xAccessor, range);
  }, [dataset, dimensions.boundedWidth, xAccessor]);

  const yScale = useMemo(() => {
    const range = { lowest: dimensions.boundedHeight, highest: 0 };
    return makeLinearScale<"amt">(dataset, yAccessor, range);
  }, [dataset, dimensions.boundedHeight, yAccessor]);

  const plot = useMemo(() => {
    const lineGenerator = line<Dataset>()
      .x((d) => xScale(xAccessor(d)))
      .y((d) => yScale(yAccessor(d)));

    return lineGenerator(dataset) || "";
  }, [dataset, xAccessor, xScale, yAccessor, yScale]);

  // plot data and assign line properties
  useEffect(() => {
    const line = select(svgRef.current)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1);

    line.attr("d", plot);
  }, [color, plot]);

  return (
    <div className={styles.inlineLineGraph}>
      <svg width={dimensions.width} height={dimensions.height}>
        <path ref={svgRef} />
      </svg>
    </div>
  );
};

export default InlineFreqGraph;
