import React, { useContext } from 'react';
import styled from 'styled-components';

import { CurrentStyles } from '@Contexts/CurrentStyles';
import { PreviewStyleId } from '@Contexts/PreviewStyleId';
import getStyle from '../helpers/getStyle';

import StyleThumbnailList from './StyleThumbnailList';

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