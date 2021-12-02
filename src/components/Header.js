import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <img
        className="header__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt="airbnb-logo"
      />
      <div className="header__center">
        <input type="text" />
      </div>
      <div className="header__right">
        <p>become guest</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .header__icon {
    height: 50px;
    object-fit: contain;
    margin-left: 20px;
  }
`;

export default Header;
