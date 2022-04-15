/* eslint-disable react/no-array-index-key */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import ZoomableImage from './ZoomableImage';
import Carousel from './Carousel';

function ImageGallery({
  heading,
  preheading,
  content,
  photos,
}) {
  // Views can be ['default', 'expanded']
  const [view, setView] = useState('default');
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
    console.log('triggering');
    imgGallery.current.style.setProperty('width', `${expandedImgBounds.current.offsetWidth}px`);
    imgGallery.current.classList.add('notransition');
  }, []);

  const handleViewChange = (e, newView) => {
    if (e.currentTarget.firstChild === e.target || e.currentTarget === e.target) {
      if (newView === 'default') {
        setView(newView);
      }
      if (newView === 'expanded' && window.matchMedia('(min-width: 768px)').matches) {
        setView(newView);
      }
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
        <Gallery bounds={expandedImgBounds} ref={imgGallery} className={view} onClick={(e) => handleViewChange(e, 'expanded')}>

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

          <ExitButton className={view}>
            <FiX size={30} onClick={(e) => handleViewChange(e, 'default')} />
          </ExitButton>
        </Gallery>
      </DefaultViewport>
      <AsideContent>
        {preheading}
      </AsideContent>
      <AsideHeading>
        {heading}
      </AsideHeading>
      <AsideContent>
        {content}
      </AsideContent>
    </ExpandedViewport>
  );
}

const Loader = styled.img`
  height: 100px;
  display: inline-block;
  margin: 0 auto;
`;

const ExpandedViewport = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (min-width: 768px) { height: 630px; flex-wrap: wrap; }
  @media (max-width: 768px) { width: 100%; }
`;

const DefaultViewport = styled.div`
  @media (min-width: 1280px) {
    width: 67.5%;
    height: 630px;
    transition: height 0.2s ease-in-out;
  }
  @media (max-width: 767px) {
    height: 400px;
    transition: height 0.2s ease-in-out;
  }
  @media (max-width: 1279px) and (min-width: 768px) {
    width: 50%;
    height: 630px;
  }
  overflow: visible;
  z-index: 2;
`;

const AsideContent = styled.div`
  width: 32.5%;
  background-color:${(props) => props.theme.colors.light};
  padding: 10px 30px;
  color: ${(props) => props.theme.colors.secondary};
  @media (max-width: 1279px) and (min-width: 768px) { width: 50%; }
  @media (max-width: 768px) { width: 100%; }
`;

const AsideHeading = styled(AsideContent)`
  @media (max-width: 768px) { order: -1; }
`;

const Gallery = styled.div`
  width: 100%;
  height: 100%;
  background-color:${(props) => props.theme.colors.background};
  &.expanded {
    transition: width 1s ease-in-out;
    :hover { cursor: crosshair; }
    &.notransition {
      transition: none !important;
    }
  }
  &.default {
    width: 100%;
    transition: width 1s ease-in-out;
    &:hover {
      cursor: zoom-in;
      @media (max-width: 768px) { cursor: default; }
    }
  }
  position: relative;
  display: flex;
  align-items: center;
`;

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
  bottom: 10px;
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
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
  & > *:active {
    transform: scale(0.95);
    transition: transform 0.06s ease-in-out;
  }
  & > * { transition: transform 0.1s ease-in-out; }
`;

const Dot = styled.span`
  background-color: ${(props) => props.theme.colors.light};
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 7px;
  border-radius: 50%;
  &:hover { cursor: pointer; }
  &.selected { background-color: ${(props) => props.theme.colors.primary}; }
`;

ImageGallery.propTypes = {
  preheading: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
