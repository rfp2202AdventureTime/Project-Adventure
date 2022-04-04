import React from 'react';
import RatingOverview from './RatingOverview';
import RatingSection from '../Styles/RatingSection.styled';
import { ReviewProvider } from './ReviewContext';

export default function RatingBreakdown() {
  return (
    <RatingSection>
      <ReviewProvider>
        <RatingOverview />
        {/* <RatingList /> */}
        {/* <FactorList /> */}
      </ReviewProvider>
    </RatingSection>
  );
}
