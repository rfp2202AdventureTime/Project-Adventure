import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function GalleryCarousel({
  photos,
  activeIndex,
  handleClick,
  view,
}) {
  const [viewport, setViewport] = React.useState(0);
  const size = 4;

  React.useEffect(() => {
    const visiblePhotos = { min: viewport, max: viewport + size };
    if (activeIndex >= visiblePhotos.max) setViewport(activeIndex - size + 1);
    if (activeIndex < visiblePhotos.min) setViewport(activeIndex);
  }, [activeIndex]);

  return (
    <Carousel className={view}>
      <UpArrow
        visible={activeIndex > 0}
        onClick={() => handleClick('prev')}
      >
        UP
      </UpArrow>
      <CarouselViewport size={size}>
        <CarouselItems viewport={viewport}>
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
      <DownArrow
        visible={activeIndex < (photos.length - 1)}
        onClick={() => handleClick('next')}
      >
        DOWN
      </DownArrow>
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
  }
`;

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
  transform: translate(0, -${((props) => props.viewport * 85)}px);
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
  handleClick: PropTypes.func.isRequired,
  view: PropTypes.string,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
  view: 'default',
};

export default GalleryCarousel;
