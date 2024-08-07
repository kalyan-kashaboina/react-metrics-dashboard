import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const PieChart = () => {
  const [series, setSeries] = useState([45, 30, 16, 9]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Software Engineer", "Tester", "Cloud Engineer", "Rust"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    dataLabels: {
      enabled: true,
      formatter: (val, { seriesIndex }) => {
        return series[seriesIndex]; // Show the actual number
      },
      style: {
        colors: ['#ffffff'] // Customize text color if needed
      }
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return val; // Show the actual number in the tooltip
        },
      },
    },
  });

  return (
    <div className="pie-chart">
      <h3>Employees Based on Department</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={400}
        height={250}
      />
    </div>
  );
};
