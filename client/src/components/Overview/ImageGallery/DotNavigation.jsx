/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function DotNavigation({
  activeIndex,
  numItems,
  handleClick,
  view,
}) {
  const items = new Array(numItems).fill('');
  const isSelected = (i) => i === activeIndex;

  return (
    <DotNav className={view}>
      {items.map((item, i) => (
        <Dot
          key={i}
          className={(isSelected(i) && 'selected')}
          onClick={() => handleClick(i)}
        />
      ))}
    </DotNav>
  );
}

const Dot = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 5px;
  border-radius: 50%;
  &.selected {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const DotNav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

DotNavigation.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  numItems: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default DotNavigation;
