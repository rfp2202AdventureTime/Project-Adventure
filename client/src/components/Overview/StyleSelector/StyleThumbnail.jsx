import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function StyleThumbnail({ url }) {
  return (
    <Thumbnail thumbnail={url} />
  );
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

StyleThumbnail.propTypes = {
  url: PropTypes.string,
};

StyleThumbnail.defaultProps = {
  url: null,
};

export default StyleThumbnail;
