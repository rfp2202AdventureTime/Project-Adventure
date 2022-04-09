import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function QAPhoto({test, url, index }) {
  return (
    <Thumbnail
      thumbnail={url}
    />
  );
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  background: ${(props) => (props.thumbnail ? `url(${props.thumbnail})` : props.theme.colors.background)};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

QAPhoto.propTypes = {
  url: PropTypes.string,
  // index: PropTypes.number.isRequired,
};

QAPhoto.defaultProps = {
  url: null,
};
