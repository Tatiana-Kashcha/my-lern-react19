import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  color: rgb(126 79 15);
  font-weight: bold;
  border: 1px solid rgb(126 79 15);
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(242 228 178);
  &:hover {
    background-color: rgb(126 79 15);
    color: rgb(242 228 178);
  }
`;

export const List = styled.ul`
  margin-top: 35%;
  display: flex;
  list-style: none;
  li {
    font-weight: bold;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
