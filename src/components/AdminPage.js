// src/components/AdminPage.js
import React from 'react';

const AdminPage = () => {
  const handleLogout = () => {
    sessionStorage.clear(); // Clear the session storage
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <div     >
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin! </p>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default AdminPage;
