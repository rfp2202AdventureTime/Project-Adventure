import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Star from '../../../Star';

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
  // console.log(review.review.reviewer_name);
  return (
    <ReviewBlock>
      <Star score={rating} />
      <UserData>
        {usernameDate}
        {/* {reviewer_name.concat(date)} */}
      </UserData>
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
`;

const UserData = styled.div`
  padding:1rem;
`;

const ReviewHeading = styled.p`
  font-weight:bold;
  font-size: medium;
`;
