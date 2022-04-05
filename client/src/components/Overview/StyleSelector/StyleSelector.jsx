import React, { useContext } from 'react';
import styled from 'styled-components';

import StyleThumbnailList from './StyleThumbnailList';
import { CurrentStyles } from '../../../contexts/CurrentStyles';
import { ActiveStyleId } from '../../../contexts/ActiveStyleId';

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
  const [currentStyles] = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const activeStyle = getActiveStyle(currentStyles, activeStyleId);

  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      {activeStyle && activeStyle.name.toUpperCase()}

      { (currentStyles.length > 1) && <StyleThumbnailList />}

    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding: 10px 0;
`;

export default StyleSelector;
