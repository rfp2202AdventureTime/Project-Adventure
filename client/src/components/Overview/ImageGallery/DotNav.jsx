/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function DotNav({ imgIdx, size, handleClick }) {
  const items = new Array(size).fill('');
  const isSelected = (i) => i === imgIdx;

  return (
    <>
      {items.map((item, i) => (
        <Dot
          key={i}
          className={(isSelected(i) && 'selected')}
          onClick={() => handleClick(i)}
        />
      ))}
    </>
  );
}

const Dot = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 5px;
  border-radius: 50%;
  &:hover { cursor: pointer; }
  &.selected { background-color: red; }
`;

DotNav.propTypes = {
  imgIdx: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DotNav;
