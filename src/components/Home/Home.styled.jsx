import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1``;

export const List = styled.ul``;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Link = styled(NavLink)``;
