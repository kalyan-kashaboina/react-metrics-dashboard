import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function ProjectStatus() {

    const [series] = useState([8,7,5]);
    const [options] = useState({
      chart: {
        type: 'donut',
      },
      labels: ['Yet-to-Start', 'InProgress', 'Completed'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      }]
    });




  return (
    <div className='project-status'>
       <h3>Projects Status</h3>

    <ReactApexChart options={options} series={series} type="donut" width={350} />
    </div>
  )
}

export default ProjectStatus
