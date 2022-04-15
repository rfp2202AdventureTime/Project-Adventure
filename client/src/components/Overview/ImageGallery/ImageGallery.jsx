/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line object-curly-newline
import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { Clickable, VisibleInDefault, VisibleInExpanded } from './Helpers.styles';

import ZoomableImage from './ZoomableImage';
import Carousel from './Carousel';

function ImageGallery({ children, photos }) {
  const [view, setView] = useState('default'); // Views can be ['default', 'expanded']
  const [imgIdx, setImgIdx] = useState(0);
  const expandedImgBounds = useRef();
  const imgGallery = useRef();

  const handleImgIdxChange = (idx) => {
    let newIdx = idx;
    if (idx === 'prev') newIdx = imgIdx - 1;
    if (idx === 'next') newIdx = imgIdx + 1;
    if (photos[newIdx]) setImgIdx(newIdx);
  };

  const handleResize = useCallback(() => {
    imgGallery.current.style.setProperty('width', `${expandedImgBounds.current.offsetWidth}px`);
    imgGallery.current.classList.add('notransition');
  }, []);

  const handleViewChange = (e, newView) => {
    if (e.currentTarget.firstChild === e.target || e.currentTarget === e.target) {
      if (newView === 'default') setView(newView);
      if (newView === 'expanded' && window.matchMedia('(min-width: 768px)').matches) setView(newView);
    }
  };

  useEffect(() => {
    if (view === 'expanded') {
      imgGallery.current.style.setProperty('width', `${expandedImgBounds.current.offsetWidth}px`);
      window.addEventListener('resize', handleResize);
    } else {
      imgGallery.current.style.setProperty('width', '100%');
      imgGallery.current.classList.remove('notransition');
      window.removeEventListener('resize', handleResize);
    }
  }, [view]);

  const leftVisibility = imgIdx > 0;
  const rightVisibility = photos && imgIdx < (photos.length - 1);
  const navVisibile = photos && photos.length > 1;
  const isZoomDisabled = view === 'default';

  return (
    <ExpandedViewport ref={expandedImgBounds}>
      <DefaultViewport>
        <Gallery ref={imgGallery} className={view} onClick={(e) => handleViewChange(e, 'expanded')}>
          {photos ? (
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
                {photos.map((photo, i) => (
                  <Dot key={i} className={(i === imgIdx && 'selected')} onClick={() => handleImgIdxChange(i)} />
                ))}
              </DotNavPresenter>
              )}
            </>
          )
            : (<Loader alt="loading" src="spinner.gif" />)}
          <ExitButton className={view}><FiX size={30} onClick={(e) => handleViewChange(e, 'default')} /></ExitButton>
        </Gallery>
      </DefaultViewport>
      {children}
    </ExpandedViewport>
  );
}

const Loader = styled.img`
  height: 100px;
  display: inline-block;
  margin: 0 auto;
`;

const ExpandedViewport = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${(props) => props.theme.colors.light};
  @media (min-width: 768px) { max-height: 630px; flex-wrap: wrap; }
  @media (max-width: 768px) { width: 100%; }
`;

const DefaultViewport = styled.div`
  @media (min-width: 1280px) {
    width: 67.5%;
    height: 630px;
    transition: height 0.2s ease-in-out;
  }
  /* @media (max-width: 767px) {
    height: 400px;
    transition: height 0.2s ease-in-out;
  } */
  @media (max-width: 1279px) and (min-width: 768px) {
    width: 50%;
    height: 630px;
  }
  overflow: visible;
  z-index: 2;
`;

const Gallery = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:${(props) => props.theme.colors.background};
  &:hover { cursor: zoom-in; }
  &:hover { @media (max-width: 768px) { cursor: default; } }
  &.expanded:hover { cursor: crosshair; }
  &.default { transition: width 1s ease-in-out; }
  &.expanded { transition: width 1s ease-in-out; }
  &.notransition { transition: none !important; }
`;

const DotNavPresenter = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color:${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  height: 35px;
  padding: 3px;
  ${VisibleInExpanded}
`;

const CarouselPresenter = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  ${VisibleInDefault}
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
  ${Clickable}
`;
const LeftArrow = styled(Arrow)`left: 5px;`;
const RightArrow = styled(Arrow)`right: 5px;`;

const ExitButton = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover { cursor: pointer; }
  ${VisibleInExpanded}
  color: ${({ theme }) => theme.colors.primary};
  ${Clickable}
`;

const Dot = styled.span`
  background-color: #aaa;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 7px;
  border-radius: 50%;
  &:hover { cursor: pointer; }
  &.selected { background-color: ${(props) => props.theme.colors.primary}; }
`;

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
