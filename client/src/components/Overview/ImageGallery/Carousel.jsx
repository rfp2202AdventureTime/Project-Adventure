/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CONFIG = {
  size: 4,
  width: 70,
  itemHeight: 70,
  itemBorder: 1,
  spacing: 5,
};

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
      <UpArrow visible={upVisibility} onClick={() => handleImgIdxChange('prev')} />
      <CarouselViewport>
        <CarouselItems viewportIdx={viewportIdx}>
          {photos.map((photo, i) => (
            <CarouselItem
              key={i}
              onClick={() => handleImgIdxChange(i)}
              visible={itemVisibility(i)}
              className={isSelected(i) && 'selected'}
            >
              <Thumbnail url={photo.thumbnail_url} />
            </CarouselItem>
          ))}
        </CarouselItems>
      </CarouselViewport>
      <DownArrow visible={downVisibility} onClick={() => handleImgIdxChange('next')} />
    </CarouselContainer>
  );
}

const CarouselContainer = styled.nav`
  position: relative;
  width: ${CONFIG.width}px;
  height: ${(CONFIG.size * (CONFIG.itemHeight + CONFIG.spacing) - CONFIG.spacing)}px;
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
`;

const CarouselItem = styled.div`
  display: inline-block;
  height: ${CONFIG.itemHeight}px;
  width: ${CONFIG.width}px;
  border: ${CONFIG.itemBorder}px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${CONFIG.spacing}px;
  ${({ visibility }) => (visibility && 'visibility: hidden;')}
  &.selected { border: ${CONFIG.itemBorder}px solid red; }
  &:hover { cursor: pointer; }
`;

const Thumbnail = styled.figure`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

const Arrow = styled.button`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background: red;
  ${({ visible }) => (!visible && 'visibility: hidden;')}
  &:hover { cursor: pointer; }
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
