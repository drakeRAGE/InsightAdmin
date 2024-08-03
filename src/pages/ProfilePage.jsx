// import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaUserEdit } from 'react-icons/fa';

function ProfilePage() {
  return (
    <div className="container mx-auto p-6 space-y-6 bg-gray-100 dark:bg-gray-900 h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">User Profile</h1>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700 text-white">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white rounded-full overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-lg">Senior Developer</p>
            <div className="flex space-x-2 mt-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center">
                <FaUserEdit className="mr-2" /> Edit Profile
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center">
                <FaUserEdit className="mr-2" /> Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Email</h3>
              <p className="text-gray-700 dark:text-gray-300">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">(123) 456-7890</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Position</h3>
              <p className="text-gray-700 dark:text-gray-300">Senior Developer</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Date of Birth</h3>
              <p className="text-gray-700 dark:text-gray-300">January 1, 1980</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <FaUser className="text-2xl text-purple-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Joined</h3>
              <p className="text-gray-700 dark:text-gray-300">March 15, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
