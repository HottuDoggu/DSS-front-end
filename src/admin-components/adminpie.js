
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);



export default function AdminPie(props) {
  const {dataStats} = props;
  const data1 = {
    labels: ['WEBDEV', 'SERVICE', 'BUSINESS',],
    datasets: [
      {
        label: '# of Votes',
        data: [dataStats?.webdev, dataStats?.service, dataStats?.business],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
  
  
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data1} />;
}
