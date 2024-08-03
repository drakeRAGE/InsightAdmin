import React, { useState } from 'react';
import { FaEnvelope, FaRegClock, FaUserCircle, FaTrashAlt, FaReply } from 'react-icons/fa';

const messagesData = [
  { id: 1, sender: 'Customer 1', subject: 'Inquiry about product', date: '2024-08-01', preview: 'Hello, I am interested in the new product...', details: 'Detailed message content here...', status: 'Unread' },
  { id: 2, sender: 'Customer 2', subject: 'Order issue', date: '2024-08-02', preview: 'I have a problem with my order #12345...', details: 'Detailed message content here...', status: 'Read' },
  { id: 3, sender: 'Customer 3', subject: 'Feedback on service', date: '2024-08-03', preview: 'I wanted to give feedback about your service...', details: 'Detailed message content here...', status: 'Unread' },
  { id: 4, sender: 'Customer 4', subject: 'Shipping delay', date: '2024-08-04', preview: 'My shipment has been delayed by a week...', details: 'Detailed message content here...', status: 'Read' },
  { id: 5, sender: 'Customer 5', subject: 'Return request', date: '2024-08-05', preview: 'I would like to return the product I purchased...', details: 'Detailed message content here...', status: 'Unread' },
  { id: 6, sender: 'Customer 6', subject: 'Product inquiry', date: '2024-08-06', preview: 'Can you provide more details about product XYZ?', details: 'Detailed message content here...', status: 'Read' },
  { id: 7, sender: 'Customer 7', subject: 'Account issue', date: '2024-08-07', preview: 'I am having trouble accessing my account...', details: 'Detailed message content here...', status: 'Unread' },
  { id: 8, sender: 'Customer 8', subject: 'Service feedback', date: '2024-08-08', preview: 'The service I received was excellent!', details: 'Detailed message content here...', status: 'Read' },
  { id: 9, sender: 'Customer 9', subject: 'Product warranty', date: '2024-08-09', preview: 'Can you tell me more about the warranty on product ABC?', details: 'Detailed message content here...', status: 'Unread' },
  { id: 10, sender: 'Customer 10', subject: 'Billing question', date: '2024-08-10', preview: 'I have a question about my recent bill...', details: 'Detailed message content here...', status: 'Read' },
];


const MessagePage = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleReplyClick = () => {
    // Handle reply action
  };

  const handleDeleteClick = (id) => {
    // Handle delete action
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">Messages</h1>

      {/* Overview */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard icon={<FaEnvelope />} title="Total Messages" value="20" color="bg-blue-500" />
          <StatsCard icon={<FaRegClock />} title="Unread Messages" value="5" color="bg-yellow-500" />
          <StatsCard icon={<FaUserCircle />} title="Responded Messages" value="15" color="bg-green-500" />
        </div>
      </div>

      {/* Message List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message List */}
        <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 dark:from-teal-800 dark:via-cyan-800 dark:to-blue-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Message List</h2>
          <ul className="space-y-4">
            {messagesData.map(message => (
              <li
                key={message.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                onClick={() => handleMessageClick(message)}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{message.subject}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{message.preview}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{message.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Message Details */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Message Details</h2>
          {selectedMessage ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{selectedMessage.subject}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">From: {selectedMessage.sender}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedMessage.preview}</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleReplyClick}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  <FaReply className="inline mr-1" /> Reply
                </button>
                <button
                  onClick={() => handleDeleteClick(selectedMessage.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  <FaTrashAlt className="inline mr-1" /> Delete
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">Select a message to view details.</p>
          )}
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

export default MessagePage;
