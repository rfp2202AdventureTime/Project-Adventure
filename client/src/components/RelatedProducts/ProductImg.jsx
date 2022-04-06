import React from 'react';
import styled from 'styled-components';
import Comparison from './Comparison';

const FavButton = styled.button`
  color: tomato;
  position: relative;
  float: right;
`;

function ProductImg({ image }) {
  // link should take it to the product page (productID)
  // src should image of related products
  const productThumbnail = image.results[0].photos[0].thumbnail_url

  return (
    <div id="parent">
      <FavButton as="a" href="http://bing.com">Compare</FavButton>
      <a href="http://google.com">
        <img
          src={productThumbnail}
          width={250}
          height={175}
<<<<<<< HEAD
          alt="IMAGE NOT FOUND"
=======
          alt="If you can see this, thumbnail not found"
>>>>>>> feat/relateditems
        />
      </a>

    </div>

  );
}

export default ProductImg;
