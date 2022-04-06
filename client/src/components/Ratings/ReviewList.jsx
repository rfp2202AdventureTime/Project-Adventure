import React from 'react';
import styled from 'styled-components';
import { ReviewProvider } from '@Contexts/ReviewContext';
import ReviewTile from './Review/ReviewTile';

export default function ReviewList() {
  return (
    <ReviewProvider>
      <RatingContainer>
        ReviewList
        <ReviewTile />
      </RatingContainer>
    </ReviewProvider>
  );
}

// Styled Container
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
