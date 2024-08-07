import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ProjectsPerYear = () => {
  // Define the state using the useState hook
  const [series] = useState([
    {
      name: 'Yet to Complete',
      data: [4, 3, 2, 5, 3, 6, 2, 4, 3, 5, 4, 2] // Data for "Yet to Complete"
    },
    {
      name: 'Completed',
      data: [2, 1, 3, 4, 2, 3, 4, 2, 5, 4, 3, 1] // Data for "Completed"
    },
    {
      name: 'In Progress',
      data: [1, 2, 4, 2, 4, 2, 1, 3, 2, 2, 1, 3] // Data for "In Progress"
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true, // Enable stacked bars
      toolbar: {
        show: false, // Hide the toolbar
      },
      background: '#ffffff', // Set chart background to white
    },
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
        columnWidth: '80%', // Adjust the width of bars
        endingShape: 'rounded', // Rounded bar ends
      }
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
      title: {
        text: 'Month', // X-axis title
      }
    },
    yaxis: {
      title: {
        text: 'Projects', // Y-axis title
      },
      min: 0, // Start y-axis at 0
    },
    grid: {
      borderColor: '#e0e0e0', // Light grey grid lines
    },
    fill: {
      colors: ['#1E90FF', '#32CD32', '#FF6347'], // Different colors for segments
    },
    tooltip: {
      theme: 'dark', // Dark theme for tooltip
      y: {
        formatter: (value, { seriesIndex, dataPointIndex }) => {
          const statuses = ['Yet to Complete', 'Completed', 'In Progress'];
          return `${statuses[seriesIndex]}: ${value}`;
        }
      },
      x: {
        formatter: (value) => {
          // Calculate total projects for the month
          const dataPointIndex = series[0].data.findIndex((_, index) => index === value);
          const total = series.reduce((acc, serie) => acc + serie.data[dataPointIndex], 0);
          return `Total Projects: ${total}`;
        }
      }
    },
    legend: {
      position: 'bottom', // Position legend at the bottom
      horizontalAlign: 'center', // Center align the legend
    }
  });

  return (
    <div className="chart" style={{ position: "relative", left: "20%" }}>
      <h3>Projects Per Month</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default ProjectsPerYear;
