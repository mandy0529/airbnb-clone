import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {useGlobalContext} from '../context/AppContext';
import SearchDate from './SearchDate';

function Banner() {
  const {showSearch, changeSearchBtn} = useGlobalContext();

  return (
    <Wrapper>
      <div className="banner__search">
        {showSearch && <SearchDate />}
        <Button
          onClick={changeSearchBtn}
          className="banner__searchBtn"
          variant="contained"
          color="secondary"
        >
          {showSearch ? 'HIDE' : 'SEARCH DATE'}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vitae
          nihil iure error laborum Lorem ipsum,
        </h3>
        <Button variant="contained" color="secondary">
          Explore Nearby
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 70vh;
  position: relative;
  background: url('assets/banner.jpeg') center center;
  .banner__info {
    background: black;
    color: white;
    padding: 20vh 50px 50px 80px;
    width: 300px;

    h1 {
      font-weight: bold;
    }
    h3 {
      margin: 3rem 0;
      max-width: 400px;
    }
  }
  .banner__searchBtn {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default Banner;
