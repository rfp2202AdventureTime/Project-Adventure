import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useActiveStyle, usePreviewStyle } from '@Contexts/StylesProvider';

import ThumbnailItem from './ThumbnailItem';

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
        <ThumbnailItem
          url={style.photos[0].thumbnail_url}
          isSelected={style.style_id === activeStyle.style_id}
          key={style.style_id}
          handleStyleThumbnailClick={() => handleStyleThumbnailClick(style.style_id)}
          handleStyleThumbnailMouseOver={() => handleStyleThumbnailMouseOver(style.style_id)}
          handleStyleThumbnailMouseOut={() => handleStyleThumbnailMouseOut()}
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

ThumbnailList.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ThumbnailList;
