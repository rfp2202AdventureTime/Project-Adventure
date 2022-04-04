import React from 'react';
import styled from 'styled-components';
import RatingOverview from './RatingOverview';
import { ReviewProvider } from './ReviewContext';

export default function RatingBreakdown() {
  return (
    <RatingsSection>
      <ReviewProvider>
        <RatingOverview />
        {/* <RatingList />
        <FactorList /> */}
      </ReviewProvider>
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
