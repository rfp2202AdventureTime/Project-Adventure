import React from 'react';
import RatingOverview from './RatingOverview';
import { RatingBreakdownContainer } from '../Styles/RatingSection.styled';
import { ReviewProvider } from './ReviewContext';

export default function RatingBreakdown() {
  return (
    <ReviewProvider>
      <RatingBreakdownContainer>
        <RatingOverview />
        {/* <RatingList /> */}
        {/* <FactorList /> */}
      </RatingBreakdownContainer>
    </ReviewProvider>
  );
}
