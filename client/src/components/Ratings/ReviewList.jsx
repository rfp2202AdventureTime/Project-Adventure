import React from 'react';
import styled from 'styled-components';
import ReviewTile from './Review/ReviewTile';
import { useReviews } from '../../contexts/ProductReview';

export default function ReviewList() {
  const reviews = useReviews();
  console.log(reviews);
  // if (reviews) {
  // }

  return (
    <ReviewContainer>
      ReviewList
      {/* {productReview.map((review) => <ReviewTile review={review} />)} */}
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
