import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const transactionData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Transactions',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const buyerProfileData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Buyers',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const mostSoldItemsData = {
  labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  datasets: [
    {
      label: 'Most Sold Items',
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">Transactions</h2>
        <Line data={transactionData} />
      </div>
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">Buyers Profile</h2>
        <Line data={buyerProfileData} />
      </div>
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">Most Sold Items</h2>
        <Bar data={mostSoldItemsData} />
      </div>
    </div>
  );
}

export default Charts;
