import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ActiveStyleId } from '@Contexts/ActiveStyleId';
import { PreviewStyleId } from '@Contexts/PreviewStyleId';

import ThumbnailItem from './ThumbnailItem';

function ThumbnailList({ thumbnails }) {
  const currentStyles = thumbnails;
  const [activeStyleId, setActiveStyleId] = useContext(ActiveStyleId);
  const [, setPreviewStyleId] = useContext(PreviewStyleId);

  const handleStyleThumbnailClick = (styleId) => {
    setActiveStyleId(styleId);
  };

  const handleStyleThumbnailMouseOver = (styleId) => {
    setPreviewStyleId(styleId);
  };

  const handleStyleThumbnailMouseOut = () => {
    setPreviewStyleId(activeStyleId);
  };

  return (
    <Thumbnails>
      {currentStyles.map((style) => (
        <ThumbnailItem
          url={style.photos[0].thumbnail_url}
          isSelected={style.style_id === activeStyleId}
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
  gap: 10px;
  max-width: 350px;
  padding: 10px 0;
`;

ThumbnailList.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ThumbnailList;
