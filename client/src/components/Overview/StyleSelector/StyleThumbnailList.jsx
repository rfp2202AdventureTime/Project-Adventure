import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyleThumbnail from './StyleThumbnail';

function StyleThumbnailList({ styles }) {
  return (
    <StyleThumbnails>
      {styles.map((style) => (
        <StyleThumbnail
          url={style.photos[0].thumbnail_url}
          key={style.style_id}
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

StyleThumbnailList.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default StyleThumbnailList;
