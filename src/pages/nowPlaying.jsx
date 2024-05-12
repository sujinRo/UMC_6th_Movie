import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getNowPlayingList } from '../apis/Movie';
import MovieBox from '../components/MovieBox';
import Loading from '../components/Loading';

const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

const Box = styled.div`
  width: 1260px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export default function NowPlayingPage() {
  const [movieList, setMovieList] = useState([]);
  const { isLoading } = useQuery('nowplayingMovie', () => getNowPlayingList(), {
    onSuccess: data => {
      console.log(data.results);
      setMovieList(data.results);
    },
    onError: error => {
      console.log(error);
    },
  });

  return isLoading ? (
    <Container>
      <Box>
        {movieList.map((item, idx) => {
          return (
            <div key={idx}>
              <MovieBox
                link={`/movie/${item.id}`}
                movieImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
                overview={item.overview}
                star={item.vote_average}
              />
            </div>
          );
        })}
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}
