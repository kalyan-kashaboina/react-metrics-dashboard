import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HiringBarChart = () => {
  const [series] = useState([
    {
      data: [400, 430, 448, 470, 540, 580, 690],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 150,
      toolbar: {
        show: false, 
      },
    },
    annotations: {
      xaxis: [
        {
          x: 500,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "X annotation",
          },
        },
      ],
      yaxis: [
        {
          y: "July",
          y2: "September",
          label: {
            text: "Y annotation",
          },
        },
      ],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      reversed: true,
      axisTicks: {
        show: true,
      },
    },
  });

  return (
    // <div className="bar-chart" style={{ width: "50%", margin: "0 auto" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    // </div>
  );
};

export default HiringBarChart;
