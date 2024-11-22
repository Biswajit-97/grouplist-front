import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Dashboard from "./pages/Dashboard";
import HEDetails from "./pages/HEDetails";
import EXMRDetails from "./pages/EXMRDetails";

// Keyframe animation for smooth transition
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MainContentContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

const MainContent = ({ role }) => {
  return (
    <MainContentContainer>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/he-details" element={<HEDetails />} />
        <Route path="/exmr-details" element={<EXMRDetails />} />
        {role === "admin" && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
        {role === "admin" && (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
      </Routes>
    </MainContentContainer>
  );
};

export default MainContent;
