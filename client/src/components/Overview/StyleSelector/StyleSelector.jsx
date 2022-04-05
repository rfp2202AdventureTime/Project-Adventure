import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnailList from './StyleThumbnailList';
import { CurrentStyles } from '../../../contexts/CurrentStyles';
import { PreviewStyleId } from '../../../contexts/PreviewStyleId';

const getStyle = (currentStyles, activeStyleID) => {
  let activeStyle = currentStyles[0];
  for (let i = 0; i < currentStyles.length; i += 1) {
    if (currentStyles[i].style_id === activeStyleID) {
      activeStyle = currentStyles[i];
    }
  }
  return activeStyle;
};

function StyleSelector() {
  const [currentStyles] = useContext(CurrentStyles);
  const [previewStyleId] = useContext(PreviewStyleId);
  const previewStyle = getStyle(currentStyles, previewStyleId);

  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      {previewStyle && previewStyle.name.toUpperCase()}

      { (currentStyles.length > 1) && <StyleThumbnailList />}

    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding: 10px 0;
`;

export default StyleSelector;
