// pages/Dashboard.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: #E1F0F7;
height: 102%;
margin-top: -5px;
border-radius: 10px;
display: flex;
justify-content: center;
align-item: center;

`;

const SubTitle = styled.h4`
  color:  #026699;
  font-style: regular;
  font-family: 'Roboto';
`;

const Dashboard = () => {
  return (
    <Container>
      <SubTitle>Welcome to Grouplist Application</SubTitle>
    </Container>
  );
};

export default Dashboard;
