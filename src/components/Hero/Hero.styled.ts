import { NavLink } from "react-router-dom";
import styled from "styled-components";
import imgBgHero from "../../images/backgroundImg.jpg";

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  height: 920px;
  background-image: url(${imgBgHero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  color: rgb(58 63 132);
  font-weight: bold;
  border: 1px solid rgb(58 63 132);
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(231 219 213);
  &:hover {
    background-color: rgb(58 63 132);
    color: rgb(231 219 213);
  }
`;

export const List = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;

  list-style: none;
  li {
    font-weight: bold;
  }
`;
