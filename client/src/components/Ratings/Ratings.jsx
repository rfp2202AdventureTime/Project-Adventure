import React from 'react';
import styled from 'styled-components';
import { RatingProvider } from '../../contexts/ReviewMeta';

import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';
import { ReviewProvider } from '../../contexts/ProductReview';

export default function Ratings() {
  return (
    <RatingProvider>
      <RatingSection>
        <RatingBreakdown />
        <ReviewProvider>
          <ReviewList />
        </ReviewProvider>
      </RatingSection>
    </RatingProvider>
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
