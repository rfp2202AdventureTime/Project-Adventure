import React from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';

const FavButton = styled.button`
  color: tomato;
  position: relative;
  float: right;
`;

function ProductImg({ image }) {

  // link should take it to the product page (productID)
  // src should image of related products
  // will need to find out the dimensions of thumbnail or use thumbnail
// console.log(image.results[0].photos[0].thumbnail_url, 'IMAGE');
const productThumbnail = image.results[0].photos[0].thumbnail_url

  return (
    <div id="parent">
      <FavButton as="a" href="http://bing.com">Compare</FavButton>
      <a href="http://google.com">
        <img
          src={productThumbnail}
          width={250}
          height={175}
          alt="this is a test"
        />
      </a>

    </div>

  );
}

export default ProductImg;
