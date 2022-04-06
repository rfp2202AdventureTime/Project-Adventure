import React, { useContext } from 'react';
import styled from 'styled-components';

import { CurrentStyles } from '@Contexts/CurrentStyles';
import { PreviewStyleId } from '@Contexts/PreviewStyleId';
import getStyle from '../helpers/getStyle';

import ThumbnailList from './ThumbnailList';

function StyleSelector() {
  const currentStyles = useContext(CurrentStyles);
  const [previewStyleId] = useContext(PreviewStyleId);
  const previewStyle = getStyle(currentStyles, previewStyleId);

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
