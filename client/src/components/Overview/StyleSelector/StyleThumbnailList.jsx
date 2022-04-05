import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail';
import { CurrentStyles } from '../../../contexts/CurrentStyles';
import { ActiveStyleId } from '../../../contexts/ActiveStyleId';

function StyleThumbnailList() {
  const [currentStyles] = useContext(CurrentStyles);
  const [activeStyleId, setActiveStyleId] = useContext(ActiveStyleId);

  const handleStyleThumbnailClick = (styleId) => {
    setActiveStyleId(styleId);
  };

  return (
    <StyleThumbnails>
      {currentStyles.map((style) => (
        <StyleThumbnail
          url={style.photos[0].thumbnail_url}
          isSelected={style.style_id === activeStyleId}
          key={style.style_id}
          handleStyleThumbnailClick={() => handleStyleThumbnailClick(style.style_id)}
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
