import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GalleryThumbnail from './GalleryThumbnail';

function GalleryCarousel({ photos, activeIndex }) {
  return (
    <Carousel>
      {photos.map((photo, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <GalleryThumbnail isSelected={(activeIndex === i)} key={i} url={photo.url} />
      ))}
    </Carousel>
  );
}

const Carousel = styled.div`
  display: inline-block;
  width: 72px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

GalleryCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeIndex: PropTypes.number,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
};

export default GalleryCarousel;
