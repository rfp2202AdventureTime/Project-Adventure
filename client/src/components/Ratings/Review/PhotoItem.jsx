import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function PhotoItem({
  url,
  isSelected,
  index,
}) {
  const handleClick = () => {
    isSelected(index);
  };

  return (
    <Thumbnail
      thumbnail={url}
      onClick={handleClick}
      // className={isSelected && 'selected'}
    />
  );
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

PhotoItem.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

PhotoItem.defaultProps = {
  url: null,
};

export default PhotoItem;
