import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import StatisticsPage from './pages/StatisticsPage';
import PaymentsPage from './pages/PaymentsPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TransactionsPage from './pages/TransactionsPage';
import ProductPage from './pages/ProductPage';
import CustomerPage from './pages/CustomerPage';
import MessagePage from './pages/MessagePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow flex flex-col bg-gray-100 dark:bg-gray-900">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex-grow p-6">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/customers" element={<CustomerPage />} />
                <Route path="/messages" element={<MessagePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
