import React from 'react';
import {Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import {Scatter} from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Scatter Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: true,
      },
    },
    y: {
      grid: {
        borderDash: [12],
        display: true,
        drawBorder: false,
      },
    },
  },
};

export function ScatterChart({data}) {
  return <Scatter options={options} data={data}/>;
}
