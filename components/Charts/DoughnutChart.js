import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right',
    },
    title: {
      display: false,
      text: 'Pie Chart',
    },
  },
}

export function DoughnutChart({data}) {
  return (
    <Doughnut
      options={options}
      data={data}
    />
  )
}
