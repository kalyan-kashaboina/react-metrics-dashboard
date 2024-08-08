import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

function WorkingPercentage() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);

  // Data for the charts
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const productionDone = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
  const productionTarget = [60, 50, 70, 55, 65, 80, 85, 75, 90, 100, 95, 105];

  // Chart options for horizontal bar
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 430,
      toolbar:{
        show:false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: ({ seriesIndex, dataPointIndex }) => {
        const done = productionDone[dataPointIndex];
        const target = productionTarget[dataPointIndex];
        setSelectedMonthIndex(dataPointIndex);
        return `<div class="arrow_box">
          <span>${months[dataPointIndex]}</span>
          <br/>
          <span>Completed Work: ${done}</span>
          <br/>
          <span>Expected Work: ${target}</span>
        </div>`;
      },
    },
    xaxis: {
      categories: months,
    },
    colors: ['#00E396', '#FF4560'], // Colors for Production Done and Production Target
    legend: {
      show: false, // Hide legend
    },
    toolbar: {
      show: false, // Hide the toolbar with the menu icon
    },
  };

  const barChartSeries = [
    {
      name: 'Production Done',
      data: productionDone,
    },
    {
      name: 'Production Target',
      data: productionTarget,
    },
  ];

  // Radial bar chart options
  const radialBarOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px',
            color: '#fff',
            offsetY: -10,
          },
          value: {
            fontSize: '14px',
            color: '#fff',
            offsetY: 10,
            formatter: (val) => `${val}%`,
          },
        },
        track: {
          background: '#333',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#FF4560'], // Gradient color
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ['#00E396'],
    series: [0], // Start with 0 and update on hover
    labels: ['Production Progress'],
  };

  // Calculate percentage and update radial bar
  const calculatePercentage = (done, target) => {
    const percentage = (done / target) * 100;
    return Math.min(percentage, 200).toFixed(2); // Show up to 200% if needed
  };

  const radialBarSeries = selectedMonthIndex !== null
    ? [calculatePercentage(productionDone[selectedMonthIndex], productionTarget[selectedMonthIndex])]
    : [0];

  return (
    <div>
      <h2>Monthly Production vs Target</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div id="bar-chart" style={{ flex: 1 }}>
          <ApexCharts
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={350}
            width={350}
          />
        </div>
        <div id="radial-bar" style={{ flex: 1 }}>
          <ApexCharts
            options={radialBarOptions}
            series={radialBarSeries}
            type="radialBar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkingPercentage;
