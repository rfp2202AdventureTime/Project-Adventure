import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function RatingBar({ scorePerct, id, toggleFilter }) {
  const handleClick = (e) => {
    const selected = e.target.className.slice(-1);
    toggleFilter(selected);
  };

  return (
    <RatingBarBlock>
      <StarLink
        className={`${id}`}
        onClick={handleClick}
      >
        {`${id} Star`}
      </StarLink>
      <GreyBar>
        <GreenBar
          width={scorePerct}
        />
      </GreyBar>
    </RatingBarBlock>
  );
}

// Style components

const RatingBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding : 0 0.5rem 0.5rem 0.5rem ;
  height: 1.5rem;
  justify-content: flex-end;
  width: 15rem;
  // gap: 1rem;
  overflow: hidden;

`;

const StarLink = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
`;

const GreyBar = styled.div`
  left: 1.3rem;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  width: 10rem;
  height: 0.5rem;
`;

const GreenBar = styled.div`
  height: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  background-color: #4CAF50;
  width: ${({ width }) => width};
`;

RatingBar.propTypes = {
  scorePerct: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};
