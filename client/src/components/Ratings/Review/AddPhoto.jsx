import React, { useState } from 'react';
import styled from 'styled-components';
import Console from '../../../Console';

export default function AddPhoto() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [imgList, setimgList] = useState([]);
  let imageBlocks;
  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(e) {
    const reader = new FileReader();

    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

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
        Console.log('Success:', res);
        // eslint-disable-next-line camelcase
        const { secure_url } = res;
        setImageSrc(secure_url);
        const newData = imgList;
        newData.push(secure_url);
        setimgList(newData);
      })
      .catch((error) => {
        Console.error('Error:', error);
      });
  }
  console.log(imgList);

  return (
    <>
      <b>
        Image Uploader
      </b>
      <div onChange={handleOnChange}>
        <p>
          <input type="file" name="file" id="input" />
        </p>
        {/* <img src={imageSrc} alt="uploaded User Img" /> */}
        {imageSrc && !uploadData && (
        <button type="button" onClick={handleOnSubmit}>Upload Files</button>
        )}
      </div>
      <PhotoContainer>
        {(imgList.length) ? (imgList.map((url) => (
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
