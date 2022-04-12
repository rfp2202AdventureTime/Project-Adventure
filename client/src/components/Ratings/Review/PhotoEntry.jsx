import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function PhotoEntry({
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
    />
  );
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  background: ${({ thumbnail, theme }) => (thumbnail ? `url(${thumbnail})` : theme.colors.background)};
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

PhotoEntry.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

PhotoEntry.defaultProps = {
  url: null,
};

export default PhotoEntry;
