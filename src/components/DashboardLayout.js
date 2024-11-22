// components/DashboardLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DashboardLayout = ({ role }) => (
  <LayoutContainer>
    <Sidebar role={role} />
    <ContentContainer>
      <TopBar />
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </ContentContainer>
  </LayoutContainer>
);

export default DashboardLayout;
