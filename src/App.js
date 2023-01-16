import logo from './logo.svg';
import './App.css';
import './css/normalize.css';
import Status_bug from './components/status/status--bug';

import Status_section from './components/status/status-section';
import Congratulations_page from './components/congratulations_page';
import Dashboard_sidebar from './components/dashboard/dashboard_sidebar';
import Portal from "./components/dashboard/portal"
import Image_upload from './components/dashboard/image_upload';
import Payment_methods_page from "./components/dashboard/payment_methods_page"
import Profile_page from "./components/dashboard/profile_page"
import Monthly_donations_page from "./components/dashboard/monthly_donations_page"
import Preferences_page from "./components/dashboard/preferences_page"
import Donation_history_page from "./components/dashboard/donation_history_page"
import Security_page from "./components/dashboard/security_page"
import Dashboard_layout from "./components/dashboard/dashboard_layout"

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Routes>
      <Route path="/congratulations" element={<Congratulations_page />} />
      <Route path="/dashboard-sidebar" element={<Dashboard_sidebar />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/payment_methods_page" element={<Payment_methods_page />} />
      <Route path="/profile_page" element={<Profile_page />} />
      <Route path="/monthly_donations_page" element={<Monthly_donations_page />} />
      <Route path="/preferences_page" element={<Preferences_page />} />
      <Route path="/donation_history_page" element={<Donation_history_page />} />
      <Route path="/security_page" element={<Security_page />} />
      <Route path="/dashboard_layout" element={<Dashboard_layout />} />
      <Route path="/" element={<Preferences_page />} />

      <Route path="/image_upload" element={<Image_upload />} />


    </Routes>
    
  );
}

export default App;
