import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import ZoomableImage from './ZoomableImage';
import Carousel from './Carousel';

function ImageGallery({ children, photos }) {
  // Views can be ['default', 'expanded']
  const [view, setView] = useState('default');
  const [imgIdx, setImgIdx] = useState(0);

  const handleViewChange = (e, newView) => {
    if (e.currentTarget.firstChild === e.target || e.currentTarget === e.target) {
      setView(newView);
    }
  };
  const handleImgIdxChange = (idx) => {
    let newIdx = idx;
    if (idx === 'prev') newIdx = imgIdx - 1;
    if (idx === 'next') newIdx = imgIdx + 1;
    if (photos[newIdx]) setImgIdx(newIdx);
  };

  const leftVisibility = imgIdx > 0;
  const rightVisibility = photos && imgIdx < (photos.length - 1);
  const navVisibile = photos && photos.length > 1;
  const isZoomDisabled = view === 'default';

  return (

    <ExpandedViewport>
      <DefaultViewport>
        <Gallery className={view} onClick={(e) => handleViewChange(e, 'expanded')}>

          {photos && (
            <>
              <ZoomableImage url={photos[imgIdx].url} disabled={isZoomDisabled} />

              <LeftArrow visible={leftVisibility} onClick={() => handleImgIdxChange('prev')}>
                <FiArrowLeft size={20} />
              </LeftArrow>
              <RightArrow visible={rightVisibility} onClick={() => handleImgIdxChange('next')}>
                <FiArrowRight size={20} />
              </RightArrow>

              {navVisibile && (
              <CarouselPresenter className={view}>
                <Carousel imgIdx={imgIdx} photos={photos} handleImgIdxChange={handleImgIdxChange} />
              </CarouselPresenter>
              )}

              {navVisibile && (
              <DotNavPresenter className={view}>
                {photos.map((i) => (
                  <Dot key={i} className={(i === imgIdx && 'selected')} onClick={() => handleImgIdxChange(i)} />
                ))}
              </DotNavPresenter>
              )}
            </>
          )}

          <ExitButton className={view}>
            <FiX size={30} onClick={(e) => handleViewChange(e, 'default')} />
          </ExitButton>
        </Gallery>
      </DefaultViewport>
      <GalleryAside>
        {children}
      </GalleryAside>
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

const VisibleInDefault = css`
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

const DotNavPresenter = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  ${VisibleInExpanded}
`;

const CarouselPresenter = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  ${VisibleInDefault}
`;

const GalleryAside = styled.div`
  background-color:${(props) => props.theme.colors.light};
  width: 480px;
  padding: 10px 30px;
  color: ${(props) => props.theme.colors.secondary};
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
  &.expanded {
    width: ${() => document.getElementById('main').offsetWidth}px;
    transition: width 1s ease-in-out;
    :hover { cursor: crosshair; }
  }
  &.default {
    width: 100%;
    transition: width 1s ease-in-out;
    &:hover { cursor: zoom-in; }
  }
  position: relative;
`;

const Arrow = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  transform: translate(0, -50%);
  top: 50%;
  &:hover { cursor: pointer; }
  color: ${({ theme }) => theme.colors.primary};
  ${(props) => (!props.visible && 'visibility: hidden;')}
  & > *:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease-in-out;
  }
  & > * { transition: transform 0.1s ease-in-out; }
`;

const LeftArrow = styled(Arrow)`
  left: 5px;
`;

const RightArrow = styled(Arrow)`
  right: 5px;
`;

const ExitButton = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  visibility: hidden;
  opacity: 0;
  &:hover { cursor: pointer; }
  ${VisibleInExpanded}
  color: ${({ theme }) => theme.colors.primary};
  & > *:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease-in-out;
  }
  & > * { transition: transform 0.1s ease-in-out; }
`;

const Dot = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 5px;
  border-radius: 50%;
  &:hover { cursor: pointer; }
  &.selected { background-color: red; }
`;

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
