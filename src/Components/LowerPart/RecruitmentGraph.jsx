import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ProjectsPerYear = () => {
  // Define the state using the useState hook
  const [series] = useState([{
    data: [5, 10, 9, 6, 9, 3] // Adjust this data as needed
  }]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false, // Hide the toolbar
      },
      background: '#ffffff', // Set chart background to white
    },
    plotOptions: {
      bar: {
        horizontal: false, // Vertical bars
        columnWidth: '80%', // Adjust the width of bars
      }
    },
    dataLabels: {
      enabled: true // Show data labels
    },
    xaxis: {
      categories: ['2019', '2020', '2021', '2022', '2023', '2024'], 
      title: {
        text: 'Year', 
      }
    },
    yaxis: {
      title: {
        text: 'Projects', 
      },
      min: 0 
    },
    grid: {
      borderColor: '#e0e0e0', 
    },
    fill: {
      colors: ['#1E90FF'], 
    },
    tooltip: {
      theme: 'dark', 
    }
  });

  return (
    <div className="chart" style={{position:"relative",left:"20%"}}>
      <h3>Projects Per Year</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default ProjectsPerYear;
