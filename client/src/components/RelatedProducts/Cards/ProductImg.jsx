import { React, useState } from 'react';
import styled from 'styled-components';
import Comparison from './Comparison';

const FavButton = styled.button`
  color: black;
  position: relative;
  float: right;
`;

const TestingModal = styled.section`
  display: ${(props) => props.show ? 'fixed' : 'none'};
  position: inline;
  background: green;
  z-index: 500;
  border-style: 10px solid;
`;

// link should take it to the product page (productID)
// src should image of related products
function ProductImg({ image }) {
  const [showModal, setShowModal] = useState(false);
  const productThumbnail = image.results[0].photos[0].thumbnail_url;

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <div id="parent">
      <TestingModal show={showModal}>
        <Comparison />
      </TestingModal>
      {/* <FavButton as="a" href="http://bing.com">Compare</FavButton> */}
      <FavButton onClick={() => handleClick()}>Compare</FavButton>
      <a href="http://google.com">
        <img
          src={productThumbnail}
          width={250}
          height={175}
          alt="If you can see this, thumbnail not found"

        />
      </a>

    </div>

  );
}

export default ProductImg;
