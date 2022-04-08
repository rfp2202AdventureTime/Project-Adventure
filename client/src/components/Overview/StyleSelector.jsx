import React from 'react';
import styled from 'styled-components';

import { usePreviewStyle, useCurrentStyles, useActiveStyle } from '@Contexts/StylesProvider';

function StyleSelector() {
  const currentStyles = useCurrentStyles();
  const { previewStyle } = usePreviewStyle();

  const { activeStyle, setActiveStyle } = useActiveStyle();
  const { setPreviewStyle } = usePreviewStyle();

  const handleStyleThumbnailClick = (styleId) => setActiveStyle(styleId);
  const handleStyleThumbnailMouseOver = (styleId) => setPreviewStyle(styleId);
  const handleStyleThumbnailMouseOut = () => setPreviewStyle(activeStyle.style_id);

  return (
    <StyleSelectorContainer>
      <strong>STYLE &gt; </strong>
      {previewStyle && previewStyle.name.toUpperCase()}

      {/* Only display the style selector if there is more than one style to choose from */}
      {(currentStyles.length > 1) && (
        <Thumbnails>
            {currentStyles.map((style) => (
              <Thumbnail
                thumbnail={style.photos[0].thumbnail_url}
                className={(style.style_id === activeStyle.style_id) && 'selected'}
                key={style.style_id}
                onClick={() => handleStyleThumbnailClick(style.style_id)}
                onMouseOver={() => handleStyleThumbnailMouseOver(style.style_id)}
                onMouseOut={() => handleStyleThumbnailMouseOut()}
              />
            ))}
        </Thumbnails>
      )}

    </StyleSelectorContainer>
  );
}

const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 400px;
  padding: 10px 0;
`;

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  &.selected::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 75%;
    width: 25%;
    height: 25%;
    background: red;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

const StyleSelectorContainer = styled.section`
  padding: 10px 0;
`;

export default StyleSelector;
