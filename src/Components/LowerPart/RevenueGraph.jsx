import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueGraph = () => {
  // Example data for total budget, projects allocation, and recruitment allocation
  const totalBudgetData = [20, 29, 37, 36, 44, 45, 50, 58]; // Total budget
  const projectAllocationData = [10, 15, 18, 17, 22, 24, 27, 32]; // Allocation for projects
  const recruitmentAllocationData = totalBudgetData.map((budget, index) => {
    // Ensure recruitment allocation plus project allocation does not exceed total budget
    return Math.min(budget - projectAllocationData[index], 10); // Max 10 or remaining budget
  });

  const [chartOptions] = useState({
    series: [
      {
        name: 'Budget Allocated for Projects',
        type: 'column',
        data: projectAllocationData,
      },
      {
        name: 'Budget Allocated for Recruitment',
        type: 'column',
        data: recruitmentAllocationData,
      },
      {
        name: 'Total Budget',
        type: 'line',
        data: totalBudgetData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        toolbar:{
            show:false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: 'Budget Allocation and Utilization (2009 - 2016)',
        align: 'left',
        offsetX: 110,
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: {
        title: {
          text: 'Amount (thousand crores)',
        },
        labels: {
          style: {
            colors: '#000',
          },
        },
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line" // Line chart type with mixed types in series
          height={350}
          width={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RevenueGraph;
