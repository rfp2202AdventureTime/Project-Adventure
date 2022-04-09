import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Helpfulness({ helpfulness, reviewId }) {
  // const [showButton, setShowButton] = useState(false);
  const [help, setHelp] = useState(false);

  // useEffect(() => {

  // }, []);
  const vote = () => {
    console.log('voted');
    axios({
      method: 'put',
      url: `/reviews/${reviewId}/helpful`,
    })
      .then(() => {
        console.log('success');
        setHelp(!help);
      })
      .catch((err) => console.log(err));
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
        {helpfulness}
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
};
