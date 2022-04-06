import React from 'react';
import styled from 'styled-components';

import { usePreviewStyle, useCurrentStyles } from '@Contexts/ActiveStyleId';

import ThumbnailList from './ThumbnailList';

function StyleSelector() {
  const currentStyles = useCurrentStyles();
  const { previewStyle } = usePreviewStyle();

  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      {previewStyle && previewStyle.name.toUpperCase()}

      {/* Only display the style selector if there is more than one style to choose from */}
      {(currentStyles.length > 1) && <ThumbnailList thumbnails={currentStyles} />}
    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.section`
  padding: 10px 0;
`;

export default StyleSelector;