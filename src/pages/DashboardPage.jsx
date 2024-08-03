import React from 'react';
// import StatsCard from '../components/StatsCard';
import Charts from '../components/Charts';
import OrdersTable from '../components/OrdersTable';
import { FaUsers, FaShoppingCart, FaBox, FaStar, FaDollarSign, FaChartLine } from 'react-icons/fa';

function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard icon={<FaUsers />} title="Total Users" value="1,000" color="bg-gradient-to-r from-green-400 to-green-500" />
        <StatsCard icon={<FaShoppingCart />} title="Total Orders" value="500" color="bg-gradient-to-r from-blue-400 to-blue-500" />
        <StatsCard icon={<FaBox />} title="Total Products" value="200" color="bg-gradient-to-r from-purple-400 to-purple-500" />
        <StatsCard icon={<FaStar />} title="Total Reviews" value="300" color="bg-gradient-to-r from-yellow-400 to-yellow-500" />
        <StatsCard icon={<FaDollarSign />} title="Total Sales" value="$50,000" color="bg-gradient-to-r from-pink-400 to-pink-500" />
        <StatsCard icon={<FaChartLine />} title="Total Expenses" value="$30,000" color="bg-gradient-to-r from-red-400 to-red-500" />
      </div>

      {/* Charts Section */}
      <Charts />

      {/* Orders Table */}
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-800 dark:via-orange-800 dark:to-red-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <OrdersTable />
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

export default DashboardPage;
