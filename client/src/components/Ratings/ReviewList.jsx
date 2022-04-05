import React from 'react';
import styled from 'styled-components';
import { ReviewProvider } from '@Contexts/ReviewContext';
import ReviewTile from './Review/ReviewTile';

export default function ReviewList() {
  return (
    <RatingContainer>
      <ReviewProvider>
        ReviewList
        <ReviewTile />
      </ReviewProvider>
    </RatingContainer>
  );
}

// Styled Container
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
