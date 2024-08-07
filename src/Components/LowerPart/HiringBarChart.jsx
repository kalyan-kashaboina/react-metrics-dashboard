import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CompanyGrowthBarChart = () => {
  const [series] = useState([
    {
      data: [18, 25, 40, 60, 85,110], // Number of employees
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
      background: '#ffffff', // Set chart background to white
    },
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
        columnWidth: '70%', // Width of bars
      },
    },
    dataLabels: {
      enabled: true, // Show data labels
    },
    xaxis: {
      categories: [
        "2019", "2020", "2021", "2022", "2023",
       "2024"
      ],
      title: {
        text: 'Year',
      },
    },
    yaxis: {
      title: {
        text: 'Number of Employees',
      },
      min: 0, // Start y-axis at 0
    },
    grid: {
      borderColor: '#e0e0e0', // Light grey grid lines
    },
    fill: {
      colors: ['#1E90FF'], // Color of the bars
    },
    tooltip: {
      theme: 'dark', // Dark theme for tooltip
    },
  });

  return (
    <div className="bar-chart">
      <h3>Company Population</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
        width="100%" 
      />
    </div>
  );
};

export default CompanyGrowthBarChart;
