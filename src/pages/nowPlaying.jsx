import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getNowPlayingList } from '../apis/Movie';

const Container = styled.div`
  color: white;
  width: 100vw;
`;

export default function NowPlayingPage() {
  const [movieList, setMovieList] = useState([]);
  const nowPlayingMovieList = useQuery('nowplayingMovie', () => getNowPlayingList(), {
    onSuccess: data => {
      console.log(data.results);
      setMovieList(data.results);
    },
    onError: error => {
      console.log(error);
    },
  });

  return <Container>{movieList.map(item => item.data)}</Container>;
}
