import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { CurrentStyles } from '../../../contexts/CurrentStyles';
import { ActiveStyleId } from '../../../contexts/ActiveStyleId';
import getStyle from '../helpers/getStyle';

import GalleryCarousel from './GalleryCarousel';

function ImageGallery() {
  const [currentStyles] = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const currentStyle = getStyle(currentStyles, activeStyleId);

  const [galleryView] = useState('default');
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
    // TODO:
    // if (viewportPosition < (mainImageIndex - carouselSize)) {
    //   setViewportPosition(viewportPosition - 1);
    // }
  };

  if ((galleryView === 'default') && (currentStyles.length > 0)) {
    return (
      <MainImage url={currentStyle.photos[mainImageIndex].url}>
        {currentStyle.photos.length > 1 && (
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

  if (galleryView === 'expanded') {
    return (
      <>
        EXPANDED VIEW TBD
      </>
    );
  }
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

export default ImageGallery;
