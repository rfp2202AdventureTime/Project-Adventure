import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ClickableText } from '../../../contexts/Shared.styled';

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
      {'Helpful? '}
      <ClickableText onClick={vote}>
        Yes
      </ClickableText>
      (
      {helpCount}
      )
      {'    |   '}
      <ClickableText onClick={report}>
        Report
      </ClickableText>
    </HelpfulnessContainer>
  );
}

// Style components

const HelpfulnessContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
`;

Helpfulness.propTypes = {
  helpfulness: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  reviewId: PropTypes.number.isRequired,
  addHelpVote: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
};
