import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;