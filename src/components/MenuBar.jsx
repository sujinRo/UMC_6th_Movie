import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 50, 100);
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
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

export default function MenuBar({ isOpen, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem('token'));

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setIsLogin(token);
  }, []);

  const onClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setIsLogin(false);
    setIsOpen(false);
  };

  const onClickLink = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <Container>
          {isLogin ? (
            <Logout onClick={onClick}>로그아웃</Logout>
          ) : (
            <>
              <NavLink to="/login" onClick={onClickLink}>
                로그인
              </NavLink>
              <NavLink to="/join" onClick={onClickLink}>
                회원가입
              </NavLink>
            </>
          )}
          <NavLink to="/popular" onClick={onClickLink}>
            Popular
          </NavLink>
          <NavLink to="/nowplaying" onClick={onClickLink}>
            Now Playing
          </NavLink>
          <NavLink to="/toprated" onClick={onClickLink}>
            Top rated
          </NavLink>
          <NavLink to="/upcoming" onClick={onClickLink}>
            Upcoming
          </NavLink>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
