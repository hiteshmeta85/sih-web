import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  indexAxis: 'x',
  layout: {
    // padding: 20,
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Bar Chart',
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
  ticks: {
    stepSize: 1,
  },
  elements: {
    bar: {
      borderWidth: 1,
      borderColor: ['rgb(0, 0, 0, 0.5)']
    },
  },
};

export function BarChart({data}) {
  return <Bar options={options} data={data}/>;
}
