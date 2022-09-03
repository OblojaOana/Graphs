import React from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import PropTypes from "prop-types";

const GraphDesign = ({ statData }) => {
  const data = statData;

  const width = 500;
  const height = 500;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // We'll make some helpers to get at the data we want
  const x = (d) => d.month;
  const y = (d) => +d.nr;

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.5,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => (data) => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <div>
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = yMax - yPoint(d);
          return (
            <Group key={`bar-${i}`}>
              <Bar
                x={xPoint(d)}
                y={yMax - barHeight}
                height={barHeight}
                width={xScale.bandwidth()}
                fill="#eb6834"
              />
            </Group>
          );
        })}
      </svg>
    </div>
  );
};
GraphDesign.propTypes = {
  statData: PropTypes.array,
};

export default GraphDesign;
