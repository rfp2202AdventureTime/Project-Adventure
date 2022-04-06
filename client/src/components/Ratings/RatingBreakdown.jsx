import React from 'react';
import styled from 'styled-components';

import { RatingProvider } from '../../contexts/ReviewMeta';
import RatingOverview from './RatingBreakdown/RatingOverview';
import RatingList from './RatingBreakdown/RatingList';
import FactorList from './RatingBreakdown/FactorList';

export default function RatingBreakdown() {
  return (
    <RatingProvider>
      <RatingContainer>
        <RatingOverview />
        <RatingList />
        <FactorList />
      </RatingContainer>
    </RatingProvider>
  );
}

// style components
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
