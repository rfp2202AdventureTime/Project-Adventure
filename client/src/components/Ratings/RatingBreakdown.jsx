import React from 'react';
import RatingOverview from './RatingOverview';
import RatingList from './RatingList';
import { ColumnContainer } from '../Styles/RatingSection.styled';
import { ReviewProvider } from './ReviewContext';

export default function RatingBreakdown() {
  return (
    <ReviewProvider>
      <ColumnContainer>
        <RatingOverview />
        <RatingList />
        {/* <FactorList /> */}
      </ColumnContainer>
    </ReviewProvider>
  );
}
