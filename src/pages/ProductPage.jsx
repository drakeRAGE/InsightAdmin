import React from 'react';
import { FaBox, FaPlus, FaChartLine, FaEdit, FaTrash, FaEye, FaStar, FaExclamationTriangle, FaRegClock, FaTrophy, FaLowVision } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4000 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 7000 },
  { month: 'Jul', sales: 8000 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Furniture', value: 300 },
  { name: 'Toys', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ProductPage = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Product Overview</h1>

      {/* Product Overview */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard icon={<FaBox />} title="Total Products" value="500" color="bg-blue-500" />
          <StatsCard icon={<FaBox />} title="Products in Stock" value="450" color="bg-green-500" />
          <StatsCard icon={<FaBox />} title="Out of Stock Products" value="50" color="bg-red-500" />
          <StatsCard icon={<FaPlus />} title="New Products" value="10" color="bg-yellow-500" />
        </div>
      </div>

    {/* Product List/Table */}
    <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Product List</h2>
      <table className="min-w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="py-3 px-4 border-b dark:border-gray-600">Product ID</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Product Name</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Category</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Price</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Stock Quantity</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Status</th>
            <th className="py-3 px-4 border-b dark:border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 'P12340', name: 'Smartphone', category: 'Electronics', price: '$500.00', quantity: 50, status: 'In Stock' },
            { id: 'P12341', name: 'T-shirt', category: 'Clothing', price: '$30.00', quantity: 200, status: 'In Stock' },
            { id: 'P12342', name: 'Lawn Mower', category: 'Home & Garden', price: '$120.00', quantity: 80, status: 'Out of Stock' },
            { id: 'P12343', name: 'Face Cream', category: 'Beauty & Health', price: '$15.00', quantity: 150, status: 'In Stock' },
            { id: 'P12344', name: 'Basketball', category: 'Sports', price: '$60.00', quantity: 90, status: 'In Stock' },
            { id: 'P12345', name: 'Toy Car', category: 'Toys', price: '$25.00', quantity: 120, status: 'In Stock' },
            { id: 'P12346', name: 'Laptop', category: 'Electronics', price: '$700.00', quantity: 40, status: 'In Stock' },
            { id: 'P12347', name: 'Jeans', category: 'Clothing', price: '$35.00', quantity: 250, status: 'In Stock' },
            { id: 'P12348', name: 'Vacuum Cleaner', category: 'Home & Garden', price: '$85.00', quantity: 75, status: 'Out of Stock' },
            { id: 'P12349', name: 'Shampoo', category: 'Beauty & Health', price: '$20.00', quantity: 130, status: 'In Stock' }
          ].map((product, i) => (
            <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.id}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.name}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.category}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.price}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.quantity}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600">{product.status}</td>
              <td className="py-2 px-4 border-b dark:border-gray-600 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center">
                  <FaEye className="mr-2" /> View
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center">
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Product Sales Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Category Insights</h3>
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

      {/* Top-Selling Products */}
      <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Top-Selling Products</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <span className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2" /> Wireless Headphones
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300">$15,000</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <span className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2" /> Smartphone
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300">$12,000</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <span className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2" /> Laptop
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300">$10,000</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <span className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2" /> Smartwatch
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300">$8,000</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <span className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2" /> Bluetooth Speaker
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-300">$6,000</span>
          </li>
        </ul>
      </div>


      
    </div>
  );
};

function StatsCard({ icon, title, value, color }) {
  return (
    <div className={`shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 flex items-center ${color} transition-transform transform hover:scale-105 `}>
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

export default ProductPage;
