import React from 'react';
import styled from 'styled-components';

function Card({src, title, descripion, price}) {
  return (
    <Wrapper>
      <img src={src} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{descripion}</h4>
        <h5>{price}</h5>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default Card;
