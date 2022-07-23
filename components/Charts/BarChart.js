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
  layout: {
    // padding: 20,
  },
  plugins: {
    legend: {
      display: false,
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
  // ticks: {
  //   stepSize: 20,
  // },
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
