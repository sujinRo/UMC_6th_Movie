import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  color: white;
  width: 100vw;
`;

const Banner = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 23px;
  font-weight: 600;
`;

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  gap: 35px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const FindBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Input = styled.input`
  width: 350px;
  height: 35px;
  border: transparent;
  border-radius: 20px;
`;

const FindBtn = styled.div`
  width: 25px;
  height: 25px;
  border: transparent;
  border-radius: 100%;
  background-color: rgb(255, 253, 163);
  text-align: center;
`;

export default function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <div>환영합니다</div>
        </Banner>
        <MovieBox>
          <Title>📽️Find your movies!</Title>
          <FindBox>
            <Input className="input" />
            <FindBtn>🔍</FindBtn>
          </FindBox>
        </MovieBox>
      </Container>
    </>
  );
}
