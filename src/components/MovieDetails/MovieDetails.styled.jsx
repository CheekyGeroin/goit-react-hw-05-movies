import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 4px 7px;
  border: 1px solid #000;
  border-radius: 20px;
  text-decoration: none;
  :hover,
  :focus {
    box-shadow: 2px 2px 2px 2px #bab8b8;
  }
`;

export const Button = styled.div`
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #000;
`;

export const ImageContainer = styled.div``;

export const Container = styled.div`
  margin-left: 15px;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Title = styled.h1``;

export const UserScore = styled.p``;

export const Overview = styled.h2``;

export const Text = styled.p``;

export const GenresTitle = styled.h2``;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const GenresItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const AdditionalContainer = styled.div`
  padding-top: 10px;
`;
export const AdditionalTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

export const AdditionalList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

export const AdditionalItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;
