import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GalleryCarousel from './GalleryCarousel';
import DotNavigation from './DotNavigation';

function ImageGallery({ children, photos }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [view, setView] = useState('default');
  const zoomBox = useRef();
  const zoomImg = useRef();

  const handlePhotoChange = (selection) => {
    let newIdx = selection;
    if (selection === 'prev') newIdx = imgIdx - 1;
    if (selection === 'next') newIdx = imgIdx + 1;
    if (photos[newIdx]) setImgIdx(newIdx);
  };

  const handleHover = (e) => {
    if (e.target === e.currentTarget) {
      setIsHovered(!isHovered);
    }
  };

  const handleZoomPosition = (e, override) => {
    if (view === 'zoom' || override) {
      const bounds = zoomBox.current.getBoundingClientRect();
      const xPercent = (((e.clientX - bounds.left) / (bounds.right - bounds.left)) * 100);
      const yPercent = (((e.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 100);
      zoomImg.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    }
  };

  const handleViewChange = (e, newView) => {
    if (e.target === e.currentTarget) {
      if (view === 'expanded' && newView === 'expanded') {
        setView('zoom');
        handleZoomPosition(e, true);
      } else {
        setView(newView);
        zoomImg.current.style.backgroundPosition = '50% 50%';
      }
    }
  };

  if (photos.length > 0) {
    const hasMultiplePhotos = photos.length > 1;
    return (

      <ExpandedImageGallery ref={zoomBox}>
        <DefaultImageGallery>
          <ImageGalleryViewport className={view}>
            <MainImage
              ref={zoomImg}
              url={photos[imgIdx].url}
              onClick={(e) => handleViewChange(e, 'expanded')}
              className={view}
              onMouseMove={(e) => handleZoomPosition(e)}
              onMouseOver={(e) => handleHover(e)}
              onMouseOut={(e) => handleHover(e)}
            >
              <LeftArrow visible={imgIdx > 0} onClick={() => handlePhotoChange('prev')} />
              <RightArrow visible={imgIdx < (photos.length - 1)} onClick={() => handlePhotoChange('next')} />
              <Exit className={view} onClick={(e) => handleViewChange(e, 'default')} />

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
          </ImageGalleryViewport>
        </DefaultImageGallery>
        {children}
      </ExpandedImageGallery>
    );
  }
}

const ExpandedImageGallery = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  height: 630px;
`;

const DefaultImageGallery = styled.div`
  width: 800px;
  overflow: visible;
  z-index: 2;
`;

const ImageGalleryViewport = styled.div`
  background-color:${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.expanded, &.zoom {
    width: ${() => document.getElementById('main').offsetWidth}px;
    transition: width 1s ease-in-out;
  }
  &.default {
    width: 100%;
    transition: width 1s ease-in-out;
  }
`;

const Arrow = styled.span`
  position: absolute;
  height: 50px;
  width: 20px;
  background-color: red;
  &:hover {
    cursor: pointer;
  }
  ${(props) => (!props.visible && 'visibility: hidden;')}
`;

const LeftArrow = styled(Arrow)`
  top: 50%;
  left: 0px;
  transform: translate(0, -50%);
`;

const RightArrow = styled(Arrow)`
  top 50%;
  right: 0px;
  transform: translate(0, -50%);
`;

const MainImage = styled.div`
  background: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  &.hover {
    cursor: zoom-in;
  }
  &.zoom {
    background-size: auto 250%;
  }
  }
`;

const Exit = styled.span`
  background-color: red;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  visibility: hidden;
  opacity: 0;
  &:hover {
    cursor: pointer;
  }
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
  children: PropTypes.node.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ImageGallery;
