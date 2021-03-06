import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MiniButton } from '../../../contexts/Shared.styled';
import HighlightText from './HighlightText';

export default function ReviewContent({ body, keyword }) {
  const [showButton, setShowButton] = useState(false);
  const [modifiedBody, setModifiedBody] = useState(body);
  const bodyCharLimit = 250;

  useEffect(() => {
    if (body.length > bodyCharLimit) {
      setShowButton(true);
      setModifiedBody(body.slice(0, bodyCharLimit).concat(' ...'));
    }
  }, [body]);

  const showMore = () => {
    setShowButton(!showButton);
    setModifiedBody(body);
  };

  return (
    <ReviewContainer>
      {keyword
        ? (
          <HighlightText
            text={modifiedBody}
            highlight={keyword}
          />
        )
        : modifiedBody}
      {showButton
        ? (
          <MiniButton
            // showButton={showButton}
            onClick={showMore}
          >
            Show More
          </MiniButton>
        ) : ''}
    </ReviewContainer>
  );
}

// Style components
const ReviewContainer = styled.div`
  overflow-wrap: break-word;
  hyphens: manual;
`;

ReviewContent.propTypes = {
  body: PropTypes.string.isRequired,
  keyword: PropTypes.string,
};

ReviewContent.defaultProps = {
  keyword: null,
};
