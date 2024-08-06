import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './index.css';

const chartData = {    
  series: [80, 20], // Active and Inactive employees
  options: {
    chart: {
      type: 'donut',
      height:200,
      width:200
    },
    labels: ['Active', 'Inactive'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 250
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

function UpperPart() {
  const [data, setData] = useState(chartData);

  return (
    <div className='upper-container'>
      <div className='sub-container'>
        <div className='headers'>Total Employees</div>
        <p className='values'>100</p>
      </div>
      <div className='sub-container'>
        <div className='headers'>Projects</div>
        <p className='values'>13</p>
      </div>
      <div className='sub-container'>
        <div style={{marginLeft:"-60px"}} className='headers'>Employees Status</div>
        <ReactApexChart options={data.options} series={data.series} type="donut" />
      </div>
    </div>
  );
}

export default UpperPart;
