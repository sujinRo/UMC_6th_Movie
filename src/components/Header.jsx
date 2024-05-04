import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(37, 50, 100);
  z-index: 1;
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

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Header() {
  return (
    <Container>
      <Logo>
        <NavLink to="/">UMC Movie</NavLink>
      </Logo>
      <Lists>
        <NavLink to="/join">회원가입</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/nowplaying">Now Playing</NavLink>
        <NavLink to="/toprated">Top rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </Lists>
    </Container>
  );
}
