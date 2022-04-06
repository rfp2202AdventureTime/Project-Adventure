import React from 'react';
import styled from 'styled-components';

import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';
import { ReviewProvider } from '../../contexts/ProductReview';
<<<<<<< HEAD
=======

>>>>>>> 18278a7 (fixed bugs in applying ReviewProvider)

export default function Ratings() {
  return (
    <RatingSection>
      <RatingBreakdown />
      <ReviewProvider>
        <ReviewList />
      </ReviewProvider>
    </RatingSection>
  );
}

// inherented theme
const RatingSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
`;
