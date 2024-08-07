import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './index.css';

const chartData = {    
  series: [80, 20], // Active and Inactive employees
  options: {
    chart: {
      type: 'donut',
      height:100,
      width:200
    },
    labels: ['Assigned', 'unassigned'],
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
          width: 150
        },
        legend: {
          horizontalAlign: 'center',
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
        <p className='values'>20</p>
      </div>
      <div className='sub-container'>
        <div style={{marginLeft:"-60px"}} className='headers'>Employees Status</div>
        <ReactApexChart options={data.options} series={data.series} type="donut" />
      </div>
      <div className='sub-container'>
         <div className='headers'>Bench Employees</div>
         <p className='values'>20</p>
      </div>
    </div>
  );
}

export default UpperPart;
