import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => (props.isSmall ? '238px' : '300px')};
  height: ${props => (props.isSmall ? '450px' : '550px')};
  border: transparent;
  border-radius: 5px;
  background-color: rgb(48, 63, 123);
  cursor: pointer;
  color: white;
`;

const MovieImg = styled.img`
  width: 100%;
  border: transparent;
  border-radius: 5px 5px 0px 0px;
`;

const MovieText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  font-size: ${props => (props.isSmall ? '5px' : '15px')};
  gap: ${props => (props.isSmall ? '2px' : '10px')};
`;

const Title = styled.div`
  width: ${props => (props.isSmall ? '50px' : '200px')};
`;

const Star = styled.div`
  width: ${props => (props.isSmall ? '50px' : '60px')};
  display: flex;
  justify-content: flex-end;
`;

export default function MovieBox({ movieImage, title, star, isSmall }) {
  return (
    <Container isSmall={isSmall}>
      <MovieImg src={movieImage} alt={title} className="movie_image" />
      <MovieText>
        <Title>{title}</Title>
        <Star>⭐{star}</Star>
      </MovieText>
    </Container>
  );
}
