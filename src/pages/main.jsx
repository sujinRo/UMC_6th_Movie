import React, { useState } from 'react';
import styled from 'styled-components';
import { getMovieList } from '../apis/Movie';
import { useQuery } from 'react-query';
import MovieBox from '../components/MovieBox';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: white;
  width: 100vw;
  margin-top: 65px;
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

const Box = styled.div`
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
  width: 335px;
  height: 35px;
  border: transparent;
  border-radius: 20px;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;

const FindBtn = styled.div`
  width: 25px;
  height: 25px;
  border: transparent;
  border-radius: 100%;
  background-color: rgb(255, 253, 163);
  text-align: center;
`;

const MovieList = styled.div`
  width: 998px;
  height: 500px;
  border: transparent;
  border-radius: 10px;
  background-color: rgb(32, 44, 91);
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px;
  gap: 13px;
  margin-bottom: 40px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5b409;
    border: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export default function MainPage() {
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);

  const movieDetailList = useQuery(['movieDetail', search], () => getMovieList(search), {
    onSuccess: data => {
      console.log(data.results);
      setMovieList(data.results);
    },
    onError: error => {
      console.log(error);
    },
  });

  const onChange = e => {
    setSearch(e.target.value);
  };

  //debounce
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
    };
  }

  return (
    <Container>
      <Banner>
        <div>환영합니다</div>
      </Banner>
      <Box>
        <Title>📽️Find your movies!</Title>
        <FindBox>
          <Input className="input" onChange={onChange} />
          <FindBtn>🔍</FindBtn>
        </FindBox>
        {search.trim() !== '' ? (
          <MovieList>
            {movieList.map((key, index) => (
              <Link to={`/movie/${movieList[index].title}`}>
                <MovieBox
                  movieImage={`https://image.tmdb.org/t/p/w500${movieList[index].poster_path}`}
                  title={movieList[index].title}
                  star={movieList[index].vote_average}
                  isSmall={true}
                />
              </Link>
            ))}
          </MovieList>
        ) : (
          <></>
        )}
      </Box>
    </Container>
  );
}
