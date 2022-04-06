import React from 'react';
import styled from 'styled-components';

// import { useMeta } from '@Contexts/ReviewContext';

export default function ReviewTile() {
  return (
    <ReviewBlock>
      {/* {FactorBars} */}
      This is one block of review
    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
