import styled from 'styled-components';

export const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};

`;

export const RatingBreakdownContainer = styled.div`
  // display: flex;
  // flex-direction: column;
`;

export const Score = styled.div`
  font-size: 4rem;
  font-weight: bold
`;

export const StarRating = styled.div`
  unicode-bidi: bidi-override;
  color: #ccc;
  font-size: 64px;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const StarFill = styled.div`
  color: #e7711b;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const StarEmpty = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`;
