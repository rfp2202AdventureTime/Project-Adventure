import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useActiveStyle } from '@Contexts/ActiveStyleId';

import GalleryCarousel from './GalleryCarousel';
import DotNavigation from './DotNavigation';

function ImageGallery({ view, handleViewChange }) {
  const { activeStyle: { photos } } = useActiveStyle();
  const [imgIdx, setImgIdx] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'up') {
      if (imgIdx > 0) setImgIdx(imgIdx - 1);
    } else if (direction === 'down') {
      if (imgIdx < (photos.length - 1)) setImgIdx(imgIdx + 1);
    }
  };

  if (photos) {
    const hasMultiplePhotos = photos.length > 1;

    return (
      <MainImage
        url={photos[imgIdx].url}
        onClick={(e) => handleViewChange(e, 'expanded')}
      >

        <ExitExpanded
          className={view}
          onClick={(e) => handleViewChange(e, 'default')}
        />

        {hasMultiplePhotos && (
          <GalleryCarousel
            activeIndex={imgIdx}
            photos={photos}
            handleClick={handleClick}
            view={view}
          />
        )}

        {hasMultiplePhotos && (
          <DotNavigation
            activeIndex={imgIdx}
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

const ExitExpanded = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  visibility: hidden;
  opacity: 0;
  &.expanded {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s linear;
  }
  &.default {
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s 0.3s, opacity 0.3s linear;
  }
`;

ImageGallery.propTypes = {
  view: PropTypes.string,
  handleViewChange: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  view: 'default',
};

export default ImageGallery;
