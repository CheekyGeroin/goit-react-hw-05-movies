import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  list-style: none;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 3);
  margin: 15px;
  max-width: 400px;
`;

export const Image = styled.img`
  width: 400px;
  display: block;
`;

export const Title = styled.p`
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
`;
export const Character = styled.p`
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
`;
