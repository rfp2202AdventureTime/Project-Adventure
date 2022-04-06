import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GalleryThumbnail from './GalleryThumbnail';

function GalleryCarousel({
  photos,
  activeIndex,
  maxSize,
  handleDownClick,
  handleUpClick,
  viewportPosition,
  view,
}) {
  return (
    <Carousel className={view}>
      <UpArrow
        visible={activeIndex > 0}
        onClick={handleUpClick}
      >
        UP
      </UpArrow>
      <CarouselViewport size={maxSize}>
        <CarouselItems viewportPosition={viewportPosition}>
          {photos.map((photo, i) => (
            <GalleryThumbnail
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              isSelected={(activeIndex === i)}
              url={photo.url}
            />
          ))}
        </CarouselItems>
      </CarouselViewport>
      <DownArrow
        visible={activeIndex < (photos.length - 1)}
        onClick={handleDownClick}
      >
        DOWN
      </DownArrow>
    </Carousel>
  );
}

const Arrow = styled.div`
  text-align: center;
  height: 20px;
  background: ${(props) => props.theme.colors.primary};
  ${(props) => (!props.visible && 'visibility: hidden;')}
  &:hover {
    cursor: pointer;
  }
`;

const UpArrow = styled(Arrow)`

`;

const DownArrow = styled(Arrow)`

`;

const CarouselItems = styled.div`
  width: 100%;
  transform: translate(0, -${((props) => props.viewportPosition * 85)}px);
`;

const Carousel = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-block;
  width: 72px;
  &.expanded {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }
`;

const CarouselViewport = styled.div`
  width: 100%;
  height: ${((props) => props.size * 85)}px;
  overflow: hidden;
`;

GalleryCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeIndex: PropTypes.number,
  maxSize: PropTypes.number,
  handleDownClick: PropTypes.func.isRequired,
  handleUpClick: PropTypes.func.isRequired,
  viewportPosition: PropTypes.number,
  view: PropTypes.string,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
  maxSize: 3,
  viewportPosition: 0,
  view: 'default',
};

export default GalleryCarousel;
