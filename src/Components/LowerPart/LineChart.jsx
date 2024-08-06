import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './linechart.css'

const LineChart = () => {
  const [series] = useState([
    {
      name: 'Recruitments',
      data: [12, 15, 10, 20, 25, 30, 28, 35, 40, 22, 18, 30], 
    },
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
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 6, 
      colors: ['#FF5733'], 
      strokeColor: '#fff', 
      strokeWidth: 2, 
    },
    title: {
      text: 'Monthly Recruitment',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3, 
      colors: ['#007bff'], 
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
          colors: '#333', // Label color
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Recruitments',
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
      shared: false,
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

export default LineChart;
