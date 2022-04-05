import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function GalleryThumbnail({ url, isSelected }) {
  if (isSelected) {
    return (
      <SelectedThumbnail url={url} />
    );
  }

  if (!isSelected) {
    return (
      <Thumbnail url={url} />
    );
  }
}
const Thumbnail = styled.span`
  background: url(${(props) => props.url});
  height: 70px;
  width: 70px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  margin: 5px 0;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedThumbnail = styled(Thumbnail)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 5px;
    top: 71px;
    left: -1px;
    display: inline-block;
    background: ${(props) => props.theme.colors.primary};
  }
`;

GalleryThumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

GalleryThumbnail.defaultProps = {
  isSelected: false,
};

export default GalleryThumbnail;