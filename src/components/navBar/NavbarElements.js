import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background-color:black;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 12;
  position: fixed;
  border-bottom:0.1px solid grey;
    
`;
export const NavLogo = styled(Link)`
  color: pink;
  font-size: 2.5rem;
  letter-spacing:7px;
  text-decoration: none;
  padding: 4px;
  margin-left:0;
  margin-right:15rem;
  font-family: 'Comforter Brush', cursive;
  

`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
    color: #fff;
    letter-spacing:1px
  }
`;