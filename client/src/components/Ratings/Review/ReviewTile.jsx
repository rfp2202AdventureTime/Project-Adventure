import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export default function ReviewTile({ review }) {
  // TODO: display a photo; sort
  console.log(review);
  return (
    <ReviewBlock>
      This is one block of review

    </ReviewBlock>
  );
}
ReviewTile.propTypes = {
  review: PropTypes.shape({

  })
};

// Style components
const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
