import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Helpfulness({ body }) {
  const [showButton, setShowButton] = useState(false);
  const [modifiedBody, setModifiedBody] = useState(body);
  useEffect(() => {
    if (body.length > 250) {
      setShowButton(true);
      setModifiedBody(body.slice(0, 251).concat(' ...'));
    }
  }, [body]);

  const toggleShowMore = () => {
    setShowButton(!showButton);
    setModifiedBody(body);
  };

  return (
    <ReviewContainer>
      {modifiedBody}
      {showButton
        ? (
          <MiniBotton
            showButton={showButton}
            onClick={toggleShowMore}
          >
            {' '}
            Show More
          </MiniBotton>
        ) : ''}
    </ReviewContainer>
  );
}

// Style components

const ReviewContainer = styled.div`
  overflow-wrap: break-word;
    hyphens: manual;
`;

const MiniBotton = styled.button`
  display: ${(props) => (props.showButton ? 'block' : 'none')};
  border: 2px solid;
  text-align: center;
  padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  font-size: small;
  font-weight: 400;
  border-radius:5px
  margin-top: 0.5rem;
`;

Helpfulness.propTypes = {
  body: PropTypes.string.isRequired,
};
