// import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-gray-100">
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link to="/statistics" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Statistics
        </Link>
        <Link to="/payments" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Payments
        </Link>
        <Link to="/transactions" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Transactions
        </Link>
        <Link to="/products" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Products
        </Link>
        <Link to="/customers" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Customers
        </Link>
        <Link to="/messages" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Messages
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
