import React from 'react';
import {FaSearch, FaUserCircle} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {RiGlobalLine} from 'react-icons/ri';
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
        <FaSearch className="icons" />
      </div>
      <div className="header__right">
        <p>become guest</p>
        <RiGlobalLine className="icons" />
        <MdOutlineKeyboardArrowDown className="icons" />
        <FaUserCircle className="icons" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 5rem;
  padding: 0 3rem;

  .header__center {
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 100px;
    max-width: 300px;
    padding: 8px 16px;
    margin: 0 5rem;
    input {
      border: none;
      outline-width: 0;
    }
    .icons {
      font-size: 1.7rem;
      margin-left: 5.7rem;
    }
  }

  .header__right {
    display: flex;
    align-items: center;
    p {
      text-transform: uppercase;
      font-weight: bold;
    }
    .icons {
      font-size: 1.7rem;
      margin-left: 0.7rem;
    }
  }

  .header__icon {
    height: 50px;
    object-fit: contain;
    margin-left: 20px;
  }
`;

export default Header;
