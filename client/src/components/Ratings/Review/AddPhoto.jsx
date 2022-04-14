/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Console from '../../../Console';

export default function AddPhoto({ photos, setPhotos }) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(e) {
    const reader = new FileReader();

    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const selectedFile = document.getElementById('input').files[0];
    const data = new FormData();
    data.append('file', selectedFile);
    data.append('upload_preset', 'myUploads');
    return fetch('https://api.cloudinary.com/v1_1/hack-reactor888/image/upload', {
      method: 'post',
      body: data,
    })
      .then((response) => response.json())
      .then((res) => {
        // eslint-disable-next-line camelcase
        const { secure_url } = res;
        setImageSrc(secure_url);
        const newData = photos;
        newData.push(secure_url);
        setPhotos(newData);
      })
      .catch((error) => {
        Console.error('Error:', error);
      });
  }

  return (
    <>
      <b>
        Image Uploader
      </b>
      <div onChange={handleOnChange}>
        <p>
          <input type="file" name="file" id="input" />
        </p>
        {imageSrc && !uploadData && (photos.length < 6) && (
        <button type="button" onClick={handleOnSubmit}>Upload Files</button>
        )}
      </div>
      {(photos.length > 0) && (
      <Note>
        {photos.length}
        {' '}
        of 6 photos uploaded
      </Note>
      )}
      <PhotoContainer>
        {(photos.length) ? (photos.map((url) => (
          <Thumbnail key={url} thumbnail={url} />))) : ''}
      </PhotoContainer>
    </>
  );
}

const Thumbnail = styled.span`
  height: 75px;
  width: 75px;
  background: ${({ thumbnail, theme }) => (thumbnail ? `url(${thumbnail})` : theme.colors.background)};
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Note = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  padding: 0.5rem;
`;
