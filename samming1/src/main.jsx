import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import EarningsDashboard from './components/EarningsDashboard';
import EarningsChart from './components/EarningsChart';
import AdViewing from './components/AdViewing';
import FAQ from './components/FAQ';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './pages/userDashboard';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={< UserDashboard/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/earnings" element={<EarningsDashboard />} />
        <Route path="/earnings-chart" element={<EarningsChart />} />
        <Route path="/ad-viewing" element={<AdViewing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
