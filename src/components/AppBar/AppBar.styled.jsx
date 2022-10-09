import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 2px 2px 2px 2px #bab8b8;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 22px;
  line-height: 1.3;

  :hover,
  :focus {
    color: #f23a3a;
    text-decoration: underline;
  }
  &.active {
    color: #f23a3a;
  }
`;
