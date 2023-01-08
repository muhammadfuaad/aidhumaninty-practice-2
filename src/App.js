import logo from './logo.svg';
import './App.css';
import './css/normalize.css';
import Status_bug from './components/status/status--bug';

import Status_section from './components/status/status-section';
function App() {
  return (
    <>
      <Status_section />
      <Status_bug />
    </>
  );
}

export default App;
