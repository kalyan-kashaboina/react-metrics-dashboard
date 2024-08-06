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
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="pie-chart">
       <h3>Employees </h3>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={450}
      />
    </div>
  );
};
