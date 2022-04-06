import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CurrentStyles } from '@Contexts/CurrentStyles';
import { ActiveStyleId } from '@Contexts/ActiveStyleId';
import getStyle from '../helpers/getStyle';

import GalleryCarousel from './GalleryCarousel';

const carouselSize = 4;

function ImageGallery({ view, handleExpandedView }) {
  const currentStyles = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const activeStyle = getStyle(currentStyles, activeStyleId);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [viewportPosition, setViewportPosition] = useState(0);

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

  if (activeStyle) {
    return (
      <MainImage
        url={activeStyle.photos[mainImageIndex].url}
        onClick={handleExpandedView}
      >

        {/* Render carousel only if there are more than one image */}
        {activeStyle.photos.length > 1 && (
          <GalleryCarousel
            activeIndex={mainImageIndex}
            photos={activeStyle.photos}
            handleDownClick={() => handleDownClick(activeStyle.photos.length)}
            handleUpClick={() => handleUpClick()}
            viewportPosition={viewportPosition}
            maxSize={carouselSize}
            view={view}
          />
        )}

      </MainImage>
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

ImageGallery.propTypes = {
  view: PropTypes.string,
  handleExpandedView: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  view: 'default',
};

export default ImageGallery;
