import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function ProjectStatus() {

    const [series] = useState([44, 55, 41]);
    const [options] = useState({
      chart: {
        type: 'donut',
      },
      labels: ['Yet-to-Complete', 'Progress', 'Completed'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    });




  return (
    <div className='project-status'>
       <h3>Projetcs Status</h3>

    <ReactApexChart options={options} series={series} type="donut" width={400} />
    </div>
  )
}

export default ProjectStatus