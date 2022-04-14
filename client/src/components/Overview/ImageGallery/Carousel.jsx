/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const CONFIG = {
  size: 4,
  width: 70,
  itemHeight: 70,
  itemBorder: 1,
  spacing: 5,
};

// TODO - fix carousel bug if there are fewer images than max size.

function Carousel({ photos, imgIdx, handleImgIdxChange }) {
  const [viewportIdx, setViewportIdx] = useState(0);

  useEffect(() => {
    const viewport = { min: viewportIdx, max: viewportIdx + CONFIG.size };
    if (imgIdx >= viewport.max) setViewportIdx(imgIdx - CONFIG.size + 1);
    if (imgIdx < viewport.min) setViewportIdx(imgIdx);
  }, [imgIdx]);

  const upVisibility = viewportIdx > 0;
  const downVisibility = viewportIdx <= (photos.length - CONFIG.size - 1);
  const itemVisibility = (i) => (i - (viewportIdx)) * (i - (viewportIdx + CONFIG.size)) <= 0;
  const isSelected = (i) => (imgIdx === i);

  return (
    <CarouselContainer size={CONFIG.size}>
      <UpArrow visible={upVisibility} onClick={() => handleImgIdxChange('prev')}><FiChevronUp size={20} /></UpArrow>
      <CarouselViewport>
        <CarouselItems viewportIdx={viewportIdx}>
          {photos.map((photo, i) => (
            <CarouselItem
              key={i}
              onClick={() => handleImgIdxChange(i)}
              visible={itemVisibility(i)}
              className={isSelected(i) && 'selected'}
            >
              <Thumbnail className={isSelected(i) && 'selected'} url={photo.thumbnail_url} />
            </CarouselItem>
          ))}
        </CarouselItems>
      </CarouselViewport>
      <DownArrow visible={downVisibility} onClick={() => handleImgIdxChange('next')}><FiChevronDown size={20} /></DownArrow>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.nav`
  position: relative;
  width: ${CONFIG.width}px;
  height: ${(CONFIG.size * (CONFIG.itemHeight + CONFIG.spacing) - CONFIG.spacing)}px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s linear;
  @media (  max-width: 1280px) {
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s 0.3s, opacity 0.3s linear;
  }
`;

const CarouselViewport = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CarouselItems = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate(0, -${({ viewportIdx }) => viewportIdx * (CONFIG.itemHeight + CONFIG.spacing)}px);
  transition: transform 0.3s ease-in-out;
`;

const CarouselItem = styled.div`
  display: inline-block;
  height: ${CONFIG.itemHeight}px;
  width: ${CONFIG.width}px;
  border: ${CONFIG.itemBorder}px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${CONFIG.spacing}px;
  ${({ visibility }) => (visibility && 'visibility: hidden;')}
  &:hover { cursor: pointer; }
  // background: ${({ theme }) => theme.colors.background};
`;

const Thumbnail = styled.figure`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  filter: opacity(0.65);
  &.selected, &:hover {
    filter: opacity(1);
    transition: filter 0.1s ease-in-out;
  }
`;

const Arrow = styled.div`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  ${({ visible }) => (!visible && 'visibility: hidden;')}
  &:hover { cursor: pointer; }
  color: ${({ theme }) => theme.colors.primary};
  & > *:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease-in-out;
  }
  & > * { transition: transform 0.1s ease-in-out; }
`;

const UpArrow = styled(Arrow)`
  top: -30px;
`;

const DownArrow = styled(Arrow)`
  top: ${(CONFIG.size * (CONFIG.itemHeight + CONFIG.spacing) - CONFIG.spacing) + 10}px;
`;

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  imgIdx: PropTypes.number,
  handleImgIdxChange: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  imgIdx: 0,
};

export default Carousel;
