import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (

        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}
