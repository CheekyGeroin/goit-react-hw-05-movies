import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)``;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
