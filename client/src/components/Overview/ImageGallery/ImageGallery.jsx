import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import CarouselNavigation from './CarouselNavigation';
import DotNavigation from './DotNavigation';

function ImageGallery({ children, photos }) {
  // Views can be ['default', 'expanded', 'zoom']
  const [view, setView] = useState('default');
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const zoomBox = useRef();
  const zoomImg = useRef();

  const handleImgIdxChange = (idx) => {
    let newIdx = idx;
    if (idx === 'prev') newIdx = imgIdx - 1;
    if (idx === 'next') newIdx = imgIdx + 1;
    if (photos[newIdx]) setImgIdx(newIdx);
  };

  // Ensure the hovered area doesn't include child elements.
  const handleHover = (e) => {
    if (e.target === e.currentTarget) setIsHovered(!isHovered);
  };

  const handleZoomPosition = (e, override) => {
    // An optional override forces the function to run outside of zoom view.
    if (override === 'reset') {
      zoomImg.current.style.backgroundPosition = '50% 50%';
    } else if (view === 'zoom' || override === 'zoom') {
      const bounds = zoomBox.current.getBoundingClientRect();
      const xPercent = ((e.clientX - bounds.left) / (bounds.right - bounds.left)) * 100;
      const yPercent = ((e.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 100;
      zoomImg.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    }
  };

  const handleViewChange = (e, newView) => {
    if (e.target === e.currentTarget) {
      // Clicking into expanded view twice also triggers zoom view.
      if (view === 'expanded' && newView === 'expanded') {
        setView('zoom');
        handleZoomPosition(e, 'zoom');
      } else {
        handleZoomPosition(e, 'reset');
        setView(newView);
      }
    }
  };

  return (

    <ExpandedViewport ref={zoomBox}>
      <DefaultViewport>
        <Gallery className={view}>
          {photos && (
            <MainImage
              ref={zoomImg}
              url={photos[imgIdx].url}
              className={`${view} ${isHovered ? 'hover' : ''}`}
              onClick={(e) => handleViewChange(e, 'expanded')}
              onMouseMove={(e) => handleZoomPosition(e)}
              onMouseOver={(e) => handleHover(e)}
              onMouseOut={(e) => handleHover(e)}
            >
              <LeftArrow visible={imgIdx > 0} onClick={() => handleImgIdxChange('prev')} />
              <RightArrow visible={imgIdx < (photos.length - 1)} onClick={() => handleImgIdxChange('next')} />
              <ExitButton className={view} onClick={(e) => handleViewChange(e, 'default')} />

              {photos.length > 1 && (
                <CarouselViewer className={view}>
                  <CarouselNavigation
                    imgIdx={imgIdx}
                    photos={photos}
                    handleImgIdxChange={handleImgIdxChange}
                  />
                </CarouselViewer>
              )}

              {photos.length > 1 && (
                <DotNavigation
                  activeIndex={imgIdx}
                  numItems={photos.length}
                  handleClick={handleImgIdxChange}
                  view={view}
                />
              )}
            </MainImage>
          )}
        </Gallery>
      </DefaultViewport>
      <GalleryAside>{children}</GalleryAside>
    </ExpandedViewport>
  );
}

const VisibleInExpanded = css`
  &.expanded, &.zoom {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  &.default {
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s 0.3s, opacity 0.3s linear;
  }
`;

const GalleryAside = styled.div`
  background-color:${(props) => props.theme.colors.light};
  width: 480px;
  padding: 10px 30px;
  color: ${(props) => props.theme.colors.secondary};
`;

const CarouselViewer = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  &.expanded, &.zoom {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }
  &.default {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s linear;
  }
`;

const ExpandedViewport = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  height: 630px;
`;

const DefaultViewport = styled.div`
  width: 800px;
  overflow: visible;
  z-index: 2;
`;

const Gallery = styled.div`
  background-color:${(props) => props.theme.colors.background};
  height: 100%;
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
  transform: translate(0, -50%);
  top: 50%;
  &:hover { cursor: pointer; }
  ${(props) => (!props.visible && 'visibility: hidden;')}
`;

const LeftArrow = styled(Arrow)`
  left: 0px;
`;

const RightArrow = styled(Arrow)`
  right: 0px;
`;

const MainImage = styled.figure`
  background: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  &.hover.default { cursor: zoom-in; }
  &.hover.expanded { cursor: crosshair; }
  &.hover.zoom { cursor: zoom-out; }
  &.zoom { background-size: auto 250%; }
`;

const ExitButton = styled.span`
  background-color: red;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  visibility: hidden;
  opacity: 0;
  &:hover { cursor: pointer; }
  ${VisibleInExpanded}
`;

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
