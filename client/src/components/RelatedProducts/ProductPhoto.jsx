import React from 'react';
import styled from 'styled-components';
import sampleData from './../../sampleData.js';

function ProductImg() {
  // console.log(sampleData.productStyles.results[0].photos[0].url);
  // console.log(sampleData, 'this is sampledata!')
  return (
      <img
      src={sampleData.productStyles.results[0].photos[0].url}
      width={300}
      height={200}
      alt="this is a test"
      as="a" href="http://google.com"
      />
  );
}

export default ProductImg;
