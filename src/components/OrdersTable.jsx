// import React from 'react';

const orders = [
  { product: 'Wireless Headphones', orderId: '123', date: '2024-07-15', customerName: 'John Doe', status: 'Delivered', amount: '$150', actions: 'View' },
  { product: 'Smartphone', orderId: '124', date: '2024-07-16', customerName: 'Jane Doe', status: 'Pending', amount: '$600', actions: 'View' },
  { product: 'Laptop', orderId: '125', date: '2024-07-17', customerName: 'Alice Smith', status: 'Delivered', amount: '$1200', actions: 'View' },
  { product: 'Smartwatch', orderId: '126', date: '2024-07-18', customerName: 'Bob Johnson', status: 'Shipped', amount: '$200', actions: 'View' },
  { product: 'Bluetooth Speaker', orderId: '127', date: '2024-07-19', customerName: 'Charlie Brown', status: 'Cancelled', amount: '$80', actions: 'View' },
  { product: 'Tablet', orderId: '128', date: '2024-07-20', customerName: 'David Wilson', status: 'Pending', amount: '$300', actions: 'View' },
  { product: 'Gaming Console', orderId: '129', date: '2024-07-21', customerName: 'Eva Green', status: 'Delivered', amount: '$400', actions: 'View' },
];


function OrdersTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Latest Orders</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer Name</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.product}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.orderId}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.date}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.customerName}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.status}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.amount}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
