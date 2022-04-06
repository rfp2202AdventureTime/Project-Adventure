import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GalleryThumbnail from './GalleryThumbnail';

function GalleryCarousel({
  photos,
  activeIndex,
  handleClick,
  viewport,
  view,
}) {
  // const [viewport, setViewport] = useState(0);

  // if (viewport > (carouselSize - mainImageIndex - 2)) {
  //   setViewport(viewport + 1);
  // }
  // Carousel viewport
  const size = 4;

  return (
    <Carousel className={view}>
      <UpArrow
        visible={activeIndex > 0}
        // onClick={handleUpClick}
        onClick={() => handleClick('up')}
      >
        UP
      </UpArrow>
      <CarouselViewport size={size}>
        <CarouselItems viewport={viewport}>
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
        // onClick={handleDownClick}
        onClick={() => handleClick('down')}
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
  viewport: PropTypes.number,
  view: PropTypes.string,
};

GalleryCarousel.defaultProps = {
  activeIndex: 0,
  viewport: 0,
  view: 'default',
};

export default GalleryCarousel;
