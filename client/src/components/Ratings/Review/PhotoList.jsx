import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PhotoEntry from './PhotoEntry';

function PhotoList({ photos, isSelected }) {
  return (
    <PhotoContainer>
      {photos.map((photo, index) => (
        <PhotoEntry
          isSelected={isSelected}
          url={photo.url}
          index={index}
          key={photo.id}
        />
      ))}
    </PhotoContainer>
  );
}

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 400px;
  padding: 10px 0;
`;

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isSelected: PropTypes.func.isRequired,
};

export default PhotoList;
