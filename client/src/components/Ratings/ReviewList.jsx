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
      <ButtonBlock>
        <Botton> MORE REVIEWS</Botton>
        <Botton> ADD A REVIEW +</Botton>
      </ButtonBlock>
    </ReviewContainer>
  );
}

// Styled Container
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.3rem 1rem 1.3rem 1rem;
`;
const Botton = styled.button`
  border: 2px solid;
  background: white;
  text-align: center;
  padding: 1.3rem 1rem 1.3rem 1rem;
  font-size: medium;
  font-weight: 700;

`;
