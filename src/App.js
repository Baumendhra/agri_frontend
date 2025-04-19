import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import CropList from './components/CropList';
import Weather from './components/Weather';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="p-6 bg-green-50 min-h-screen">
        <nav className="mb-6 flex ap-4">
          <Link to="/" className="text-green-700 font-bold">Home</Link>
          <Link to="weather">Weather</Link>
          <Link to="/login">Login</Link>
          <Link to="register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CropList/>}/>
          <Route path="weather" element={<Weather/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
