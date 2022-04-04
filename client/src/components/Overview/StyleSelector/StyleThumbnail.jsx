import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function StyleThumbnail({ url, isSelected }) {
  return (isSelected)
    ? <SelectedThumbnail thumbnail={url} />
    : <Thumbnail thumbnail={url} />;
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
`;

const SelectedThumbnail = styled(Thumbnail)`
  border-color: red;
`;

StyleThumbnail.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
};

StyleThumbnail.defaultProps = {
  url: null,
  isSelected: false,
};

export default StyleThumbnail;
