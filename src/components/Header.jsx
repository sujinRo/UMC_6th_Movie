import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(32, 44, 91);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 17px;
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isLogin ? 'yellow' : 'white')};
`;

const Lists = styled.div`
  font-size: 14px;
  display: flex;
  gap: 40px;
  margin-right: 20px;
  ${NavLink}:hover {
    font-size: 15px;
  }
`;
export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <Logo>
        <NavLink to="/">UMC Movie</NavLink>
      </Logo>
      <Lists>
        <NavLink to="/" isLogin={true} onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? '로그아웃' : '로그인'}
        </NavLink>
        <NavLink to="/popular" isLogin={false}>
          Popular
        </NavLink>
        <NavLink to="/nowplaying" isLogin={false}>
          Now Playing
        </NavLink>
        <NavLink to="/toprated" isLogin={false}>
          Top rated
        </NavLink>
        <NavLink to="/upcoming" isLogin={false}>
          Upcoming
        </NavLink>
      </Lists>
    </Container>
  );
}
