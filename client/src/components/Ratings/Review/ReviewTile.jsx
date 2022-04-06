import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Star from '../../../Star';
import { useMeta } from '../../../contexts/ReviewMeta';

export default function ReviewTile(review) {
  // TODO: display a photo; sort
  const {
    review: {
      rating, summary, recommend, response, date, body,
    },
  } = review;
  const convertedDate = moment(date).format('MMMM D, YYYY');
  // eslint-disable-next-line react/destructuring-assignment
  const usernameDate = `${review.review.reviewer_name},  ${convertedDate}`;

  // const [reviewNum, setReviewNum] = useState(0);
  // const { totalCT } = useMeta();

  return (
    <ReviewBlock>
      <StarBlock>
        <Star score={rating} />
        <UserData>
          {usernameDate}
        </UserData>
      </StarBlock>
      <ReviewHeading>
        {summary}
      </ReviewHeading>
      {body}

    </ReviewBlock>
  );
}

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding:1rem;
  min-width:950px;
  border-bottom: 0.2rem dotted rgba(221, 235, 223);
`;
const StarBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserData = styled.div`
  justify-content: end
`;

const ReviewHeading = styled.p`
  font-weight:bold;
  font-size: medium;
  padding: 1rem 0 1rem 0;
`;
