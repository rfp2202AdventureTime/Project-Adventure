import React from 'react';
import styled from 'styled-components';

import { ReviewProvider } from '@Contexts/ReviewContext';
import RatingOverview from './RatingBreakdown/RatingOverview';
import RatingList from './RatingBreakdown/RatingList';
import FactorList from './RatingBreakdown/FactorList';

export default function RatingBreakdown() {
  return (
    <ReviewProvider>
      <RatingContainer>
        <RatingOverview />
        <RatingList />
        <FactorList />
      </RatingContainer>
    </ReviewProvider>
  );
}

// style components
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
