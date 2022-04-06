import React from 'react';
import styled from 'styled-components';
import Star from '../../../Star';

export default function ReviewTile(review) {
  // TODO: display a photo; sort
  const {
    review: {
      rating, summary, recommend, response, date, reviewer_name, body,
    },
  } = review;
// console.log(rating);
  return (
    <ReviewBlock>
      <Star score={4.2} />
      <ReviewHeading>
        {summary}
      </ReviewHeading>

    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewHeading = styled.h2`
`;
