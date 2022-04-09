import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Helpfulness({
  addHelpVote, helpfulness, reportReview, reviewId, index,
}) {
  const [helpCount, setHelpCount] = useState(helpfulness);
  const [voteLimiter, setvoteLimiter] = useState(true);

  const vote = () => {
    if (voteLimiter) {
      addHelpVote(reviewId);
      setHelpCount(helpCount + 1);
    }
    setvoteLimiter(voteLimiter && false);
  };

  const report = () => {
    reportReview(index, reviewId);
  };
  return (
    <HelpfulnessContainer>
      Helpful?
      <FontLikeButton onClick={vote}>
        Yes
      </FontLikeButton>
      <WhiteSpaceWrapper>
        (
        {helpCount}
        )
      </WhiteSpaceWrapper>
      {' | '}
      <FontLikeButton onClick={report}>
        Report
      </FontLikeButton>
    </HelpfulnessContainer>
  );
}

// Style components

const HelpfulnessContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const WhiteSpaceWrapper = styled.div`
  margin-right: 1rem;
`;
const FontLikeButton = styled.button`
background-color: transparent;
border: none;
text-decoration: underline;
margin-left: 0.5rem;
`;

Helpfulness.propTypes = {
  helpfulness: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  reviewId: PropTypes.number.isRequired,
  addHelpVote: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
};
