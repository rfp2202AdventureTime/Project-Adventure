import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CurrentStyles } from '@Contexts/CurrentStyles';
import { ActiveStyleId } from '@Contexts/ActiveStyleId';
import getStyle from '../helpers/getStyle';

import GalleryCarousel from './GalleryCarousel';

function ImageGallery({ galleryView }) {
  const [currentStyles] = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const currentStyle = getStyle(currentStyles, activeStyleId);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [viewportPosition, setViewportPosition] = useState(0);
  const carouselSize = 4;

  const handleDownClick = (maxLength) => {
    if (mainImageIndex < (maxLength - 1)) {
      setMainImageIndex(mainImageIndex + 1);
    }
    // HAS A BUG.
    if (viewportPosition > (carouselSize - mainImageIndex - 2)) {
      setViewportPosition(viewportPosition + 1);
    }
  };

  const handleUpClick = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  return (
    <MainImage url={currentStyle ? currentStyle.photos[mainImageIndex].url : ''}>
      { currentStyle && currentStyle.photos.length > 1 && galleryView && (
        <GalleryCarousel
          activeIndex={mainImageIndex}
          photos={currentStyle.photos}
          handleDownClick={() => handleDownClick(currentStyle.photos.length)}
          handleUpClick={() => handleUpClick()}
          viewportPosition={viewportPosition}
          maxSize={carouselSize}
        />
      )}
    </MainImage>
  );
}

const MainImage = styled.div`
  background: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

ImageGallery.propTypes = {
  galleryView: PropTypes.string,
};

ImageGallery.defaultProps = {
  galleryView: 'default',
};

export default ImageGallery;
