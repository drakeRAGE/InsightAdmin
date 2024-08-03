import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer } from 'recharts';
import Charts from '../components/Charts';

const salesData = [
  { month: 'Jan', sales: 12000 },
  { month: 'Feb', sales: 15000 },
  { month: 'Mar', sales: 17000 },
  { month: 'Apr', sales: 16000 },
  { month: 'May', sales: 19000 },
  { month: 'Jun', sales: 22000 },
  { month: 'Jul', sales: 24000 },
  { month: 'Aug', sales: 23000 },
];

const orderVolumeData = [
  { month: 'Jan', orders: 120 },
  { month: 'Feb', orders: 150 },
  { month: 'Mar', orders: 170 },
  { month: 'Apr', orders: 160 },
  { month: 'May', orders: 190 },
  { month: 'Jun', orders: 220 },
  { month: 'Jul', orders: 240 },
  { month: 'Aug', orders: 230 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Home & Garden', value: 300 },
  { name: 'Beauty & Health', value: 200 },
  { name: 'Sports', value: 150 },
  { name: 'Toys', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1920'];

function StatisticsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Statistics</h1>

      {/* Overall Performance Overview */}
      <div className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 dark:from-blue-800 dark:via-green-800 dark:to-yellow-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Overall Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard title="Total Sales" value="$123,456" color="bg-gradient-to-r from-green-400 to-green-500" />
          <StatsCard title="Total Orders" value="3,456" color="bg-gradient-to-r from-blue-400 to-blue-500" />
          <StatsCard title="Total Customers" value="1,234" color="bg-gradient-to-r from-yellow-400 to-yellow-500" />
          <StatsCard title="Returning Customers" value="34%" color="bg-gradient-to-r from-red-400 to-red-500" />
        </div>
      </div>

      {/* Sales Trends */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Sales Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Order Volume */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Order Volume</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={orderVolumeData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Charts */}
      <Charts />
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

export default StatisticsPage;
