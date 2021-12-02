import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';

function SearchDate() {
  const {startDate, endDate} = useGlobalContext();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  return <Wrapper>search data</Wrapper>;
}

const Wrapper = styled.div`
  min-height: 30vh;
  background: white;
  color: black;
`;
export default SearchDate;
