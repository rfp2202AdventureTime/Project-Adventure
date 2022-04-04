import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnailList from './StyleThumbnailList';
import { CurrentStyles, ActiveStyle } from '../../../CurrentStylesContext';

const getActiveStyle = (currentStyles, activeStyleID) => {
  let activeStyle = currentStyles[0];
  for (let i = 0; i < currentStyles.length; i += 1) {
    if (currentStyles[i].style_id === activeStyleID) {
      activeStyle = currentStyles[i];
    }
  }
  return activeStyle;
};

function StyleSelector() {
  const currentStyles = useContext(CurrentStyles);
  const activeStyle = getActiveStyle(currentStyles, useContext(ActiveStyle));

  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      {activeStyle.name.toUpperCase()}

      { (currentStyles.length > 1) && <StyleThumbnailList />}

    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding: 10px 0;
`;

export default StyleSelector;
