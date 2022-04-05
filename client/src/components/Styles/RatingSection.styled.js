import styled from 'styled-components';

export const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};

`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Score = styled.div`
  padding-right: 1rem;
  font-size: 4rem;
  font-weight: bold
`;
