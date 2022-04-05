import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail';
import { CurrentStyles } from '@Contexts/CurrentStyles';
import { ActiveStyleId } from '@Contexts/ActiveStyleId';
import { PreviewStyleId } from '@Contexts/PreviewStyleId';

function StyleThumbnailList() {
  const [currentStyles] = useContext(CurrentStyles);
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
    <StyleThumbnails>
      {currentStyles.map((style) => (
        <StyleThumbnail
          url={style.photos[0].thumbnail_url}
          isSelected={style.style_id === activeStyleId}
          key={style.style_id}
          handleStyleThumbnailClick={() => handleStyleThumbnailClick(style.style_id)}
          handleStyleThumbnailMouseOver={() => handleStyleThumbnailMouseOver(style.style_id)}
          handleStyleThumbnailMouseOut={() => handleStyleThumbnailMouseOut()}
        />
      ))}
    </StyleThumbnails>
  );
}

const StyleThumbnails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 350px;
  padding: 10px 0;
`;

export default StyleThumbnailList;
