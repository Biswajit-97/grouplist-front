import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.div`
  width: 81.5%;
  height: 50px;
  background-color: #E1F0F7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 14.5%;
  margin-top: 18px;
  border-radius: 10px;
`;

const AppName = styled.div`
  font-size: 18px;
  font-weight: semibold;
  color: #034F75;
  margin-left: 40%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 16px;
  color: #034F75;
  margin-right: 10px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #BDDCEC;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #034F75;
`;

const Topbar = ({ username }) => {
  return (
    <TopbarContainer>
      <AppName>Grouplist Application</AppName>
      <UserContainer>
        <UserName>{username}</UserName>
        <UserAvatar>{username ? username.charAt(0) : 'U'}</UserAvatar>
      </UserContainer>
    </TopbarContainer>
  );
};

export default Topbar;
