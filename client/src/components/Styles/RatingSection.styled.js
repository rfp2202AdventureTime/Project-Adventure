import styled from 'styled-components';



// flexbox container
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StarContainer = styled(RowContainer)`
  align-items: center;
`;


// Specifc component
export const Score = styled.div`
  padding-right: 1rem;
  font-size: 4rem;
  font-weight: bold
`;

export const progressBar = styled.div`

`;

