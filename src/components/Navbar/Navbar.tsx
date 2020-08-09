import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavStyle>
      <Left>
        <Link className='links' to='/'>
          Car Trader
        </Link>
      </Left>
      <Right>
        <div>
          <Link className='links' to='/'>
            Home
          </Link>
        </div>
        <div>
          <Link className='links' to='/faqs'>
            Faqs
          </Link>
        </div>
        <div>
          <Link className='links' to='/add'>
            Sell Car
          </Link>
        </div>
      </Right>
    </NavStyle>
  );
};

export default Navbar;

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .links {
    padding: 0 1em;
    text-decoration: none;
    color: white;
  }
`;

const Right = styled.div`
  display: flex;
`;
const Left = styled.div``;
