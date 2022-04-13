/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Comparison from './Comparison';
import { FeatureProvider } from './FeatureContext';

//*** FIX ON CLICK BUTTON SO IT DOESN'T CHANGE CURRENT PRODUCT ID FOR COMPARISON

function ProductImg({ image, product }) {
  const [showModal, setShowModal] = useState(false);
  const [ID, setID] = useState();
  const productThumbnail = image;

  function handleClick() {
    setShowModal(!showModal);
    setID(product);
  }

  // console.log(product, 'this is productimg product')

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <CardImage url={productThumbnail}>
      <FeatureProvider>

        <ModalContainer show={showModal}>

          <Modal show={showModal}>

            <Comparison />
          </Modal>

        </ModalContainer>

        <CompareButton onClick={() => handleClick()}>&#9733;</CompareButton>

      </FeatureProvider>
    </CardImage>
  );
}

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

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

const Modal = styled.div`
  display: ${(props) => (props.show ? 'relative' : 'none')};
  background-poisition: center;
  position: absolute;
  width: max-content;
  z-index: 500;

  top: 40%;
  left: 40%;
  background: grey;
  border-style: 10px solid;
`;

const ModalContainer = styled.a`
  position: fixed;
  background-color: ${(props) => props.theme.colors.modalBackground};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  display: ${(props) => (props.show ? 'relative' : 'none')};
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: disabled;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
`;

export default ProductImg;
