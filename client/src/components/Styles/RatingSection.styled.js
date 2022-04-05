import styled from 'styled-components';

export const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};

`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Score = styled.div`
  font-size: 4rem;
  font-weight: bold
`;
