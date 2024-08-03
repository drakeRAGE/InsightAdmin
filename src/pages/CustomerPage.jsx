import React from 'react';
import { FaUser, FaUserPlus, FaUsers, FaStar, FaComments, FaRegClock } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

const data = [
  { month: 'Jan', users: 400 },
  { month: 'Feb', users: 300 },
  { month: 'Mar', users: 500 },
  { month: 'Apr', users: 400 },
  { month: 'May', users: 600 },
  { month: 'Jun', users: 700 },
  { month: 'Jul', users: 800 },
];

const pieData = [
  { name: 'Active Users', value: 400 },
  { name: 'Inactive Users', value: 200 },
];

const COLORS = ['#0088FE', '#FF8042'];

const CustomerPage = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Customer Overview</h1>

      {/* Customer Overview */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={<FaUsers />} title="Total Customers" value="1200" color="bg-blue-500" />
          <StatsCard icon={<FaUserPlus />} title="New Customers" value="150" color="bg-green-500" />
          <StatsCard icon={<FaUser />} title="Active Customers" value="1000" color="bg-yellow-500" />
          <StatsCard icon={<FaUser />} title="Inactive Customers" value="200" color="bg-red-500" />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer Growth Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">User Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer List/Table */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer List</h2>
        <table className="min-w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 border-b dark:border-gray-600">Customer ID</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Customer Name</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Email</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Phone</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Status</th>
              <th className="py-3 px-4 border-b dark:border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'C12340', name: 'John Doe', email: 'john.doe@example.com', phone: '(123) 456-7890', status: 'Active' },
              { id: 'C12341', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(123) 456-7891', status: 'Active' },
              { id: 'C12342', name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: '(123) 456-7892', status: 'Inactive' },
              { id: 'C12343', name: 'Emily Davis', email: 'emily.davis@example.com', phone: '(123) 456-7893', status: 'Active' },
              { id: 'C12344', name: 'Daniel Wilson', email: 'daniel.wilson@example.com', phone: '(123) 456-7894', status: 'Active' },
              { id: 'C12345', name: 'Sarah Brown', email: 'sarah.brown@example.com', phone: '(123) 456-7895', status: 'Inactive' },
              { id: 'C12346', name: 'David Miller', email: 'david.miller@example.com', phone: '(123) 456-7896', status: 'Active' },
              { id: 'C12347', name: 'Laura Martinez', email: 'laura.martinez@example.com', phone: '(123) 456-7897', status: 'Active' },
              { id: 'C12348', name: 'James Taylor', email: 'james.taylor@example.com', phone: '(123) 456-7898', status: 'Inactive' },
              { id: 'C12349', name: 'Jessica Garcia', email: 'jessica.garcia@example.com', phone: '(123) 456-7899', status: 'Active' }
            ].map((customer, i) => (
              <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="py-2 px-4 border-b dark:border-gray-600">{customer.id}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{customer.name}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{customer.email}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{customer.phone}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">{customer.status}</td>
                <td className="py-2 px-4 border-b dark:border-gray-600">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Top Customers and Customer Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Customers */}
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Customers</h2>
          <ul className="space-y-4">
            {[...Array(5).keys()].map(i => (
              <li key={i} className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md dark:text-gray-300">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 mr-2" /> Customer {i}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">$5000</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Feedback */}
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer Feedback</h2>
          <ul className="space-y-4">
            {[...Array(5).keys()].map(i => (
              <li key={i} className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md dark:text-gray-300">
                <span className="flex items-center">
                  <FaComments className="text-blue-500 mr-2" /> Feedback from Customer {i}
                </span>
                <span className="text-gray-700 dark:text-gray-300">"Great service!"</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function StatsCard({ icon, title, value, color }) {
  return (
    <div className={`shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex items-center ${color} transition-transform transform hover:scale-105`}>
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

export default CustomerPage;
