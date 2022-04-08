import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useActiveStyle, usePreviewStyle } from '@Contexts/StylesProvider';

function ThumbnailList({ thumbnails }) {
  const currentStyles = thumbnails;
  const { activeStyle, setActiveStyle } = useActiveStyle();
  const { setPreviewStyle } = usePreviewStyle();

  const handleStyleThumbnailClick = (styleId) => {
    setActiveStyle(styleId);
  };

  const handleStyleThumbnailMouseOver = (styleId) => {
    setPreviewStyle(styleId);
  };

  const handleStyleThumbnailMouseOut = () => {
    setPreviewStyle(activeStyle.style_id);
  };

  return (
    <Thumbnails>
      {currentStyles.map((style) => (
        <Thumbnail
          thumbnail={style.photos[0].thumbnail_url}
          className={(style.style_id === activeStyle.style_id) && 'selected'}
          key={style.style_id}
          onClick={() => handleStyleThumbnailClick(style.style_id)}
          onMouseOver={() => handleStyleThumbnailMouseOver(style.style_id)}
          onMouseOut={() => handleStyleThumbnailMouseOut()}
        />
      ))}
    </Thumbnails>
  );
}

const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 400px;
  padding: 10px 0;
`;

// TODO: This needs to be replaced with an image of a checkmark.
// It's a blank circle for now.
const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  &.selected::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 75%;
    width: 25%;
    height: 25%;
    background: red;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

ThumbnailList.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ThumbnailList;
