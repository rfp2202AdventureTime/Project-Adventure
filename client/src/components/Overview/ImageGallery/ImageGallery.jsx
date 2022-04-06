import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useActiveStyle } from '@Contexts/ActiveStyleId';

import GalleryCarousel from './GalleryCarousel';
import DotNavigation from './DotNavigation';

function ImageGallery({ view, handleViewChange }) {
  const [imgIdx, setImgIdx] = useState(0);
  const { activeStyle: { photos } } = useActiveStyle();

  const handlePhotoChange = (selection) => {
    let newIdx = selection;
    if (selection === 'prev') newIdx = imgIdx - 1;
    if (selection === 'next') newIdx = imgIdx + 1;
    if (photos[newIdx]) setImgIdx(newIdx);
  };

  if (photos) {
    const hasMultiplePhotos = photos.length > 1;

    return (
      <MainImage
        url={photos[imgIdx].url}
        onClick={(e) => handleViewChange(e, 'expanded')}
      >

        <LeftArrow
          visible={imgIdx > 0}
          onClick={() => handlePhotoChange('prev')}
        />

        <RightArrow
          visible={imgIdx < (photos.length - 1)}
          onClick={() => handlePhotoChange('next')}
        />

        <Exit
          className={view}
          onClick={(e) => handleViewChange(e, 'default')}
        />

        {hasMultiplePhotos && (
          <>
            <GalleryCarousel
              activeIndex={imgIdx}
              photos={photos}
              handleClick={handlePhotoChange}
              view={view}
            />

            <DotNavigation
              activeIndex={imgIdx}
              numItems={photos.length}
              handleClick={handlePhotoChange}
              view={view}
            />
          </>
        )}

      </MainImage>
    );
  }
}

const Arrow = styled.span`
  position: absolute;
  height: 50px;
  width: 30px;
  background-color: red;
  ${(props) => (!props.visible && 'visibility: hidden;')}
`;

const LeftArrow = styled(Arrow)`
  top: 50%;
  left: 0px;
  translate(0, -50%);
`;

const RightArrow = styled(Arrow)`
  top 50%;
  right: 0px;
  translate(0, -50%);
`;

const MainImage = styled.div`
  background: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Exit = styled.span`
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
