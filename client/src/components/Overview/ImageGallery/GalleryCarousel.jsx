import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GalleryThumbnail from './GalleryThumbnail';

function GalleryCarousel({ photos, activeIndex, maxSize }) {
  return (
    <CarouselViewport size={maxSize}>
      <Carousel>
        {photos.map((photo, i) => (
          <GalleryThumbnail
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            isSelected={(activeIndex === i)}
            url={photo.url}
          />
        ))}
      </Carousel>
    </CarouselViewport>
  );
}

const Carousel = styled.div`
  width: 100%;
`;

const CarouselViewport = styled.div`
  display: inline-block;
  width: 72px;
  position: absolute;
  top: 20px;
  left: 20px;
  height: ${((props) => props.size * 85)}px;
  overflow: hidden;
`;

GalleryCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeIndex: PropTypes.number,
  maxSize: PropTypes.number,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
  maxSize: 3,
};

export default GalleryCarousel;
