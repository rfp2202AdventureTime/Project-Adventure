import React from 'react';
import RatingSection from '../Styles/RatingSection.styled';

import RatingBreakdown from './RatingBreakdown';

export default function Ratings() {
  return (
    <RatingSection>
      <h1>Ratings and Reviews for product id 65632</h1>
      <RatingBreakdown />
    </RatingSection>
  );
}
