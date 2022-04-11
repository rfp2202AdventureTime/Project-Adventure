/* eslint-disable react/prop-types */
import { React, useState, useContext } from 'react';
import styled from 'styled-components';
import Comparison from './Comparison';
import { useFeature, FeatureProvider } from './FeatureContext';

// link should take it to the product page (productID)
// src should image of related products
function ProductImg({ image, product }) {
  const [showModal, setShowModal] = useState(false);
  const [ID, setID] = useState();
  const productThumbnail = image;

  function handleClick() {
    setShowModal(!showModal);
    setID(product);
  }

  // useEffect(() => {
  //   window.eventlistener
  // })

  return (

    <div>
      <FeatureProvider prodID={ID}>
        <TestingModal show={showModal}>
          <Comparison />
        </TestingModal>

        <CompareButton onClick={() => handleClick()}>&#9733;</CompareButton>
        <a href="http://google.com">
          <img
            src={productThumbnail}
            width={250}
            height={150}
            alt="If you can see this, thumbnail not found"
          />
        </a>

      </FeatureProvider>
    </div>
  );
}

const CompareButton = styled.button`
  color: yellow;
  border: 2px, white;
  position: absolute;
  right: 8px;
  top: -3px;
  background-color: transparent;
  border: transparent;
  margin: 5px;
`;

const TestingModal = styled.div`
  display: ${(props) => (props.show ? 'relative' : 'none')};
  position: absolute;
  width: max-content;
  z-index: 500;
  top: 50%;
  left: 50%;
  background: grey;
  border-style: 10px solid;
`;
export default ProductImg;
