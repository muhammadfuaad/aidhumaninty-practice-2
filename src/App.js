import logo from './logo.svg';
import './App.css';
import './css/normalize.css';
import Status_bug from './components/status/status--bug';

import Status_section from './components/status/status-section';
import Congratulations_page from './components/congratulations_page';
import Dashboard_sidebar from './components/dashboard/dashboard_sidebar';
import Portal from "./components/dashboard/portal"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Routes>
      <Route path="/congratulations" element={<Congratulations_page />} />
      <Route path="/dashboard-sidebar" element={<Dashboard_sidebar />} />
      <Route path="/portal" element={<Portal />} />


    </Routes>
    
  );
}

export default App;
