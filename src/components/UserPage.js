// src/components/UserPage.js
import React from 'react';

const UserPage = () => {
  const handleLogout = () => {
    sessionStorage.clear(); // Clear the session storage
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, User!</p>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default UserPage;
