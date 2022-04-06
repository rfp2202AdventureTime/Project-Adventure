import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ThumbnailItem({
  url,
  isSelected,
  handleStyleThumbnailClick,
  handleStyleThumbnailMouseOut,
  handleStyleThumbnailMouseOver,
}) {
  return (
    <Thumbnail
      thumbnail={url}
      className={isSelected && 'selected'}
      onClick={handleStyleThumbnailClick}
      onMouseOver={handleStyleThumbnailMouseOver}
      onMouseOut={handleStyleThumbnailMouseOut}
    />
  );
}

// TODO: This needs to be replaced with an image of a checkmark.
// It's a blank circle for now.
const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  &.selected::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 75%;
    width: 25%;
    height: 25%;
    background: ${(props) => props.theme.colors.light};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

ThumbnailItem.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
  handleStyleThumbnailClick: PropTypes.func.isRequired,
  handleStyleThumbnailMouseOver: PropTypes.func.isRequired,
  handleStyleThumbnailMouseOut: PropTypes.func.isRequired,
};

ThumbnailItem.defaultProps = {
  url: null,
  isSelected: false,
};

export default ThumbnailItem;
