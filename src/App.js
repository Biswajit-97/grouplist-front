import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import HeDetails from './components/pages/HEDetails';
import ExmrDetails from './components/pages/EXMRDetails';
import Login from './components/Login ';
import Topbar from './components/TopBar';

function App() {
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || 'User');

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setRole(null);
    setUsername('User');
  };

  const handleLogin = (role, username) => {
    localStorage.setItem('role', role);
    localStorage.setItem('username', username);
    setRole(role);
    setUsername(username);
  };

  return (
    <Router>
    <div>
      {role && <Topbar username={username} />}
      <div style={{ display: 'flex' }}>
        {role ? (
          <>
            <Sidebar role={role} onLogout={handleLogout} />
            <div style={{ flex: 1, padding: '20px' }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                {role === 'admin' && (
                  <>
                    <Route path="/he-details" element={<HeDetails />} />
                    <Route path="/exmr-details" element={<ExmrDetails />} />
                    <Route path="/he-details" element={<HeDetails />} />
                    <Route path="/exmr-details" element={<ExmrDetails />} />
                  </>
                )}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login setRole={setRole} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </div>
  </Router>
  );
}

export default App;
