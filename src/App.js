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

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Routes>
      <Route path="/congratulations" element={<Congratulations_page />} />
      <Route path="/dashboard-sidebar" element={<Dashboard_sidebar />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/payment_methods_page" element={<Payment_methods_page />} />
      <Route path="/image_upload" element={<Image_upload />} />


    </Routes>
    
  );
}

export default App;
