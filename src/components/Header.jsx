import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(37, 50, 100);
  z-index: 1;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Logo = styled.div`
  font-size: 17px;
  margin-left: 20px;
`;

const Lists = styled.div`
  font-size: 14px;
  display: flex;
  gap: 25px;
  margin-right: 20px;
`;

export default function Header() {
  return (
    <Container>
      <Logo>UMC Movie</Logo>
      <Lists>
        <div>회원가입</div>
        <div>Popular</div>
        <div>Now Playing</div>
        <div>Top rated</div>
        <div>Upcoming</div>
      </Lists>
    </Container>
  );
}
