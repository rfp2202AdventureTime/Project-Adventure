import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Star({ score }) {
  const scorePct = `${Math.floor((score / 5) * 100)}%`;
  const width = { width: scorePct };
  return (
    <StarBlock>
      <div className="ratings">
        <div className="empty-stars" />
        <div
          className="full-stars"
          style={width}
        />
      </div>
    </StarBlock>
  );
}

Star.propTypes = {
  score: PropTypes.number.isRequired,
};

const StarBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
