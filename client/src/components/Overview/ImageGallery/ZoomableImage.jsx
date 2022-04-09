import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ZoomableImage({ url, disabled }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const zoomImg = useRef();

  const handleZoomPosition = (e) => {
    const bounds = zoomImg.current.getBoundingClientRect();
    const xPercent = ((e.clientX - bounds.left) / (bounds.right - bounds.left)) * 100;
    const yPercent = ((e.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 100;
    zoomImg.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  };

  const zoomIn = (e) => {
    zoomImg.current.style.backgroundSize = 'auto 250%';
    handleZoomPosition(e);
  };

  const zoomOut = () => {
    zoomImg.current.style.backgroundSize = null;
    zoomImg.current.style.backgroundPosition = '50% 50%';
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    if (isZoomed) zoomOut();
    if (!isZoomed) zoomIn(e);
    setIsZoomed(!isZoomed);
  };

  useEffect(() => { if (disabled) zoomOut(); }, [disabled]);

  return (
    <Image
      url={url}
      ref={zoomImg}
      onMouseMove={isZoomed ? ((e) => handleZoomPosition(e)) : null}
      onClick={!disabled ? ((e) => toggleZoom(e)) : null}
      className={`${isZoomed ? 'zoom' : ''}`}
    />
  );
}

const Image = styled.figure`
  background: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  &.zoom:hover { cursor: zoom-out; }
`;

ZoomableImage.propTypes = {
  url: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ZoomableImage.defaultProps = {
  disabled: true,
};

export default ZoomableImage;
