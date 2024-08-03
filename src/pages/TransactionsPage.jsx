import React from 'react';
import { FaDollarSign, FaChartLine, FaListUl, FaCreditCard, FaMoneyBillWave, FaExclamationTriangle, FaUser, FaEye, FaUndo } from 'react-icons/fa';
import TransactionByCategoryChart from '../components/TransactionByCategoryChart';
import MonthlyRevenueChart from '../components/MonthlyRevenueChart';
import TopCustomersChart from '../components/TopCustomersChart';

function TransactionsPage() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Transactions Overview</h1>

      {/* Overview Metrics */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Overview Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={<FaDollarSign />} title="Total Transactions" value="10,000" color="bg-gradient-to-r from-green-400 to-green-500" />
          <StatsCard icon={<FaChartLine />} title="Total Revenue" value="$2,500,000" color="bg-gradient-to-r from-blue-400 to-blue-500" />
          <StatsCard icon={<FaMoneyBillWave />} title="Average Transaction Value" value="$250" color="bg-gradient-to-r from-yellow-400 to-yellow-500" />
          <StatsCard icon={<FaExclamationTriangle />} title="Successful vs. Failed Transactions" value="90% Success" color="bg-gradient-to-r from-red-400 to-red-500" />
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Transactions</h2>
        <table className="min-w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-3 px-4 border-b dark:border-gray-600">Transaction ID</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Date & Time</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Customer Name/ID</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Amount</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Status</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Payment Method</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'TX12341', date: '2024-08-01 14:23', customer: 'John Doe', amount: '$1,200', status: 'Completed', method: 'Credit Card' },
              { id: 'TX12342', date: '2024-08-02 10:15', customer: 'Jane Smith', amount: '$800', status: 'Pending', method: 'PayPal' },
              { id: 'TX12343', date: '2024-08-02 13:45', customer: 'Alice Johnson', amount: '$500', status: 'Refunded', method: 'Bank Transfer' },
              { id: 'TX12344', date: '2024-08-03 09:30', customer: 'Bob Brown', amount: '$1,000', status: 'Completed', method: 'Credit Card' },
              { id: 'TX12345', date: '2024-08-03 11:20', customer: 'Charlie Davis', amount: '$650', status: 'Cancelled', method: 'PayPal' },
              { id: 'TX12346', date: '2024-08-03 15:10', customer: 'Eva Green', amount: '$750', status: 'Pending', method: 'Credit Card' },
              { id: 'TX12347', date: '2024-08-04 08:55', customer: 'Frank Harris', amount: '$2,300', status: 'Completed', method: 'Bank Transfer' },
              { id: 'TX12348', date: '2024-08-04 12:40', customer: 'Grace Lee', amount: '$950', status: 'Refunded', method: 'Credit Card' },
              { id: 'TX12349', date: '2024-08-04 14:25', customer: 'Hank Martin', amount: '$1,500', status: 'Completed', method: 'PayPal' },
              { id: 'TX12350', date: '2024-08-04 16:00', customer: 'Ivy Nelson', amount: '$700', status: 'Pending', method: 'Credit Card' }
            ].map((transaction, i) => (
              <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.id}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.date}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.customer}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.amount}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.status}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{transaction.method}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center transition-colors">
                    <FaEye className="mr-2" /> View
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center transition-colors">
                    <FaUndo className="mr-2" /> Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Charts Section */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Monthly/Weekly Revenue</h3>
            <MonthlyRevenueChart />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Transaction by Category</h3>
            <TransactionByCategoryChart />
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Customers</h2>
        <TopCustomersChart />
      </div>

    </div>
  );
}

function StatsCard({ icon, title, value, color }) {
  return (
    <div className={`bg-gradient-to-r ${color} shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex items-center transition-transform transform hover:scale-105`}>
      <div className="text-4xl text-white mr-4">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-white">{title}</div>
      </div>
    </div>
  );
}
export default TransactionsPage;
