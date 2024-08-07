import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// import './EmployeesWorking.css';

const EmployeesWorking = () => {
  const [series] = useState([
    { name: 'Project A', data: [12, 15, 10, 20, 25, 30, 28, 35, 40, 22, 18, 30] },
    { name: 'Project B', data: [10, 20, 15, 25, 30, 35, 32, 38, 45, 25, 20, 32] },
    { name: 'Project C', data: [8, 12, 10, 18, 22, 27, 25, 30, 35, 20, 16, 28] },
    { name: 'Project D', data: [15, 18, 13, 22, 28, 33, 30, 36, 42, 23, 19, 31] },
    { name: 'Project E', data: [7, 10, 8, 15, 20, 25, 23, 28, 32, 18, 14, 25] },
    { name: 'Project F', data: [9, 14, 11, 19, 24, 29, 26, 31, 37, 21, 17, 27] },
    { name: 'Project G', data: [11, 16, 13, 21, 26, 32, 29, 34, 40, 23, 19, 29] },
    { name: 'Project H', data: [6, 9, 7, 14, 18, 22, 20, 25, 30, 16, 12, 22] },
    { name: 'Project I', data: [13, 17, 12, 23, 29, 34, 31, 37, 43, 25, 21, 33] },
    { name: 'Project J', data: [5, 8, 6, 12, 16, 20, 18, 22, 26, 14, 10, 20] },
  ]);

  const [options] = useState({
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#00FF7F', '#FF1493', '#1E90FF'],
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0, // Minimal markers
    },
    title: {
      text: 'Employees Assigned in Projects',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3, // Thicker lines
    },
    xaxis: {
      categories: [
        'January', 'February', 'March', 'April', 'May', 
        'June', 'July', 'August', 'September', 'October', 
        'November', 'December'
      ],
      title: {
        text: 'Month',
        style: {
          color: '#333',
        },
      },
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Employees',
        style: {
          color: '#333',
        },
      },
      min: 0,
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    tooltip: {
      shared: true,
      y: {
        formatter: (val) => val,
      },
      x: {
        formatter: (val) => `Month: ${val}`,
      },
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  });

  return (
    <div className="line-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default EmployeesWorking;
