import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyleThumbnailList from './StyleThumbnailList';

function StyleSelector({ styles }) {
  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      SELECTED STYLE

      { (styles.length > 1) && <StyleThumbnailList styles={styles} />}

    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding: 10px 0;
`;

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default StyleSelector;
