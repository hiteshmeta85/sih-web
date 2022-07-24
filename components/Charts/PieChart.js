import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
    title: {
      display: false,
      text: 'Pie Chart',
    },
  },
}

export function PieChart({data}) {
  return <Pie options={options} data={data} />;
}
