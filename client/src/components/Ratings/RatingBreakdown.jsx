import React from 'react';
import styled from 'styled-components';

import RatingOverview from './RatingBreakdown/RatingOverview';
import RatingList from './RatingBreakdown/RatingList';
import FactorList from './RatingBreakdown/FactorList';

export default function RatingBreakdown() {
  return (
    <RatingContainer>
      <RatingOverview />
      <RatingList />
      <FactorList />
    </RatingContainer>
  );
}

// style components
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
