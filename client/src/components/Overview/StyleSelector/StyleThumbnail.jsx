import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function StyleThumbnail({ url, isSelected, handleStyleThumbnailClick }) {
  return (isSelected)
    ? <SelectedThumbnail thumbnail={url} onClick={handleStyleThumbnailClick} />
    : <Thumbnail thumbnail={url} onClick={handleStyleThumbnailClick} />;
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
`;

// TODO: This needs to be replaced with an image of a checkmark.
// It's a blank circle for now.
const SelectedThumbnail = styled(Thumbnail)`
  position: relative;
  &::after {
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

StyleThumbnail.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
  handleStyleThumbnailClick: PropTypes.func.isRequired,
};

StyleThumbnail.defaultProps = {
  url: null,
  isSelected: false,
};

export default StyleThumbnail;
