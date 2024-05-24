import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 50, 100);
`;

const NavLink = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  color: white;
  text-decoration: none;
  font-weight: 600;
`;

const Logout = styled.div`
  color: #e5b409;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    font-size: 15px;
  }
`;

export default function MenuBar() {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem('token'));

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setIsLogin(token);
  }, []);

  const onClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setIsLogin(false);
  };

  return (
    <Container>
      {isLogin ? (
        <Logout onClick={onClick}>로그아웃</Logout>
      ) : (
        <>
          <NavLink to="/login">로그인</NavLink>
          <NavLink to="/join">회원가입</NavLink>
        </>
      )}
      <NavLink to="/popular">Popular</NavLink>
      <NavLink to="/nowplaying">Now Playing</NavLink>
      <NavLink to="/toprated">Top rated</NavLink>
      <NavLink to="/upcoming">Upcoming</NavLink>
    </Container>
  );
}
