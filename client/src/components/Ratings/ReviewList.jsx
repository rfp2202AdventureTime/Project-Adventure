import React from 'react';
import styled from 'styled-components';
import ReviewTile from './Review/ReviewTile';
import { useReviews } from '../../contexts/ProductReview';

export default function ReviewList() {
  const reviews = useReviews().results;
  // console.log(reviews);
  let reviewCollection = [];
  if (reviews) {
    reviewCollection = reviews.map(
      (review) => (
        <ReviewTile
          key={review.review_id}
          review={review}
        />
      ),
    );
  }
  return (
    <ReviewContainer>
      {reviewCollection}
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
