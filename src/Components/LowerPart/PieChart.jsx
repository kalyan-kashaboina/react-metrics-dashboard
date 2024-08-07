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
  });

  return (
    <>
      <h3>Employees </h3>
      <div className="pie-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={380}
          height={250}
        />
      </div>
    </>
  );
};
