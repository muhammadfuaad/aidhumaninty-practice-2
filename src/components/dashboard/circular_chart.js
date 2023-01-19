import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [30, 50, 20],
      backgroundColor: [
        
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Circular_chart() {
  return <Doughnut data={data} />;
};

export default Circular_chart;
