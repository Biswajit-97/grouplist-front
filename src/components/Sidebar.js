import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 175px;
  background-color: #034F75;
  height: 93vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: white;
  margin-left: 18px;
  margin-top: -52px;
  border-radius: 10px;
`;
const SidebarHeading = styled.div`
  margin-top: 5px;
  margin-bottom: 45px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;
const SidebarLogo = styled.img`
  size: 10px;
`;
const SidebarItem = styled(NavLink)`
  padding: 10px;
  color: #BDDCEC;
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 8px;

  &.active {
    background-color: #026699;
    color: white;
  }

  &:hover {
    background-color: #FFFFFF;
    color: #026699;
    border-radius: 12px;
  }
`;

const Sidebar = ({ role, onLogout }) => {
  return (
    <SidebarContainer>
      <SidebarHeading>
        <SidebarLogo alt='.'></SidebarLogo>
        West Bengal Council of Higher Secondary Education
      </SidebarHeading> 
      <SidebarItem to="/dashboard">Dashboard</SidebarItem>
      {role === 'admin' ? (
        <>
          <SidebarItem to="/he-details">HE Details</SidebarItem>
          <SidebarItem to="/exmr-details">EXMR Details</SidebarItem>
          <SidebarItem to="/he-remuneration">HE Remuneration</SidebarItem>
          <SidebarItem to="/exmr-remuneration">EXMR Remuneration</SidebarItem>
        </>
      ) : (
        <>
          <SidebarItem to="/user-option1">User Option 1</SidebarItem>
          <SidebarItem to="/user-option2">User Option 2</SidebarItem>
        </>
      )}
      <SidebarItem  onClick={onLogout} style={{ marginTop: 'auto' }}>Log Out</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
