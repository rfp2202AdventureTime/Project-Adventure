import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Helpfulness({ addHelpVote, helpfulness, reviewId }) {
  const [helpCount, setHelpCount] = useState(helpfulness);

  const vote = () => {
    addHelpVote(reviewId);
    setHelpCount(helpCount + 1);
  };

  const report = () => {
    console.log('reported');
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
  reviewId: PropTypes.number.isRequired,
  addHelpVote: PropTypes.func.isRequired,
};
