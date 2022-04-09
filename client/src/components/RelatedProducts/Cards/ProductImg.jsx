/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import styled from 'styled-components';
import Comparison from './Comparison';

// link should take it to the product page (productID)
// src should image of related products
function ProductImg({ image }) {
  const [showModal, setShowModal] = useState(false);

  const productThumbnail = image;
  function handleClick() {
    setShowModal(!showModal);
  }

  return (

    <div>
      <TestingModal show={showModal}>
        <Comparison />
      </TestingModal>

      <CompareButton onClick={() => handleClick()}>Compare</CompareButton>
      <a href="http://google.com">
        <img
          src={productThumbnail}
          width={250}
          height={150}
          alt="If you can see this, thumbnail not found"
        />
      </a>

    </div>
  );
}

const CompareButton = styled.button`
  color: black;
  position: relative;
  float: right;
  background-color: transparent;
  border: transparent;
`;

const TestingModal = styled.section`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: relative;
  background: grey;
  z-index: 500;
  border-style: 10px solid;
`;
export default ProductImg;
