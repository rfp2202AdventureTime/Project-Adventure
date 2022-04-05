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
  const [mainImageIndex] = useState(0);

  if ((galleryView === 'default') && (currentStyles.length > 0)) {
    return (
      <MainImage url={currentStyle.photos[mainImageIndex].url}>
        {currentStyle.photos.length > 1 && (
          <GalleryCarousel
            activeIndex={mainImageIndex}
            photos={currentStyle.photos}
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
