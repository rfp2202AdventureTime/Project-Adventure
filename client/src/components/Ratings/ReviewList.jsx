import React from 'react';
import styled from 'styled-components';
import { ReviewProvider } from './ReviewContext';

export default function ReviewList() {
  return (
    <RatingContainer>
    <ReviewProvider>
      ReviewList
    </ReviewProvider>
    </RatingContainer>
  );
}

// Styled Container
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;