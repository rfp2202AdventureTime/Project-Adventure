import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Refactor to pull `view` dependency out and into the Image Gallery.
function GalleryCarousel({
  photos,
  activeIndex,
  handleClick,
  view,
}) {
  // Determines the maximum of items to display in the carousel.
  const carouselSize = 4;

  // When the index of the actively selected photo changes,
  // check to see if it's visibly in range of the carousel's viewport.
  // If it isn't, adjust the viewport so that it is.
  const [viewportPosition, setViewportPosition] = React.useState(0);
  React.useEffect(() => {
    const visiblePhotos = { min: viewportPosition, max: viewportPosition + carouselSize };
    if (activeIndex >= visiblePhotos.max) setViewportPosition(activeIndex - carouselSize + 1);
    if (activeIndex < visiblePhotos.min) setViewportPosition(activeIndex);
  }, [activeIndex]);

  // The up and down arrows should only be visible if there
  // are more photos in the carousel's viewport in that direction.
  const canScrollViewportUp = viewportPosition > 0;
  const canSrollViewportDown = viewportPosition <= (photos.length - carouselSize - 1);

  return (
    <Carousel size={carouselSize} className={view}>
      <UpArrow visible={canScrollViewportUp} onClick={() => handleClick('prev')} />
      <CarouselViewport size={carouselSize}>
        <CarouselItems viewportPosition={viewportPosition}>
          {photos.map((photo, i) => (
            <Thumbnail
              key={photo.thumbnail_url}
              url={photo.thumbnail_url}
              className={(activeIndex === i) && 'selected'}
              onClick={() => handleClick(i)}
            />
          ))}
        </CarouselItems>
      </CarouselViewport>
      <DownArrow visible={canSrollViewportDown} onClick={() => handleClick('next')} />
    </Carousel>
  );
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
  position: relative;
  &.selected {
    background: red;
  }
`;

const Arrow = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: red;
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
  top: 50%;
  transform: translate(0, -50%);
  left: 30px;
  display: inline-block;
  text-align: center;
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
  handleClick: PropTypes.func.isRequired,
  view: PropTypes.string,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
  view: 'default',
};

export default GalleryCarousel;
