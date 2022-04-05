import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnailList from './StyleThumbnailList';
import { CurrentStyles } from '../../../contexts/CurrentStyles';
import { PreviewStyleId } from '../../../contexts/PreviewStyleId';
import getStyle from '../helpers/getStyle';

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
