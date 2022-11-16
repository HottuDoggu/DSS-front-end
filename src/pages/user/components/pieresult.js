import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export const data = {
  labels: ['WEBDEV', 'BUSINESS', 'SERVICE', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    
    },
  ],
};

export default function PieResults(props) {

  const data1 = {
    labels: ['WEBDEV', 'BUSINESS', 'SERVICE'],
    datasets: [
      {
        label: '# of Votes',
        data: [props?.wave,props?.bave,props?.save],
        backgroundColor: [
          'rgb(189, 34, 34)',
          'rgb(70, 67, 227)',
          'rgb(5, 105, 42)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return <Pie  data={data1} />;
}
