import React from 'react';
import { FaDollarSign, FaCreditCard, FaFileInvoiceDollar, FaMoneyCheckAlt, FaClock, FaExchangeAlt, FaWallet, FaListUl, FaEye, FaPen, FaTrash } from 'react-icons/fa';

function PaymentsPage() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Payments Overview</h1>

      {/* Payment Metrics */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Payment Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={<FaDollarSign />} title="Total Payments" value="$1,000,000" color="bg-gradient-to-r from-green-400 to-green-500" />
          <StatsCard icon={<FaCreditCard />} title="Pending Payments" value="$100,000" color="bg-gradient-to-r from-yellow-400 to-yellow-500" />
          <StatsCard icon={<FaFileInvoiceDollar />} title="Completed Payments" value="$900,000" color="bg-gradient-to-r from-blue-400 to-blue-500" />
          <StatsCard icon={<FaMoneyCheckAlt />} title="Refunded Payments" value="$50,000" color="bg-gradient-to-r from-red-400 to-red-500" />
        </div>
      </div>

      {/* Detailed Payment Information */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Detailed Payment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={<FaWallet />} title="Wallet Balance" value="$200,000" color="bg-gradient-to-r from-teal-400 to-teal-500" />
          <StatsCard icon={<FaExchangeAlt />} title="Total Transactions" value="5,000" color="bg-gradient-to-r from-indigo-400 to-indigo-500" />
          <StatsCard icon={<FaClock />} title="Average Processing Time" value="2 hours" color="bg-gradient-to-r from-yellow-300 to-yellow-400" />
          <StatsCard icon={<FaListUl />} title="Transaction Types" value="Credit, Debit, Refund" color="bg-gradient-to-r from-gray-400 to-gray-500" />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Transactions</h2>
        <table className="min-w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-3 px-4 border-b dark:border-gray-600">Transaction ID</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Date</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Amount</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Method</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Status</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows, replace with dynamic data */}
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4 border-b dark:border-gray-600">TX123456</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">2024-08-01</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">$1,200</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Credit Card</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Completed</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center transition-colors">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center transition-colors">
                  <FaPen className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center transition-colors">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4 border-b dark:border-gray-600">TX123457</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">2024-08-02</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">$500</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Debit Card</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Pending</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center transition-colors">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center transition-colors">
                  <FaPen className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center transition-colors">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4 border-b dark:border-gray-600">TX123458</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">2024-08-03</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">$750</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">PayPal</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Completed</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center transition-colors">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center transition-colors">
                  <FaPen className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center transition-colors">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4 border-b dark:border-gray-600">TX123459</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">2024-08-04</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">$1,000</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Bank Transfer</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">Refunded</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center transition-colors">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center transition-colors">
                  <FaPen className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center transition-colors">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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

export default PaymentsPage;
