/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FiBookOpen, FiTrash } from 'react-icons/fi';
import useTracking from '@Contexts/ClickTracker';
import Comparison from './Comparison';
import { useCurrentProduct } from '../../../contexts/ProductIDContext';
import { ModalClose } from '../../../contexts/Shared.styled';

function ProductImg({ image, product, star }) {
  const imageNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
  const { trackEvent } = useTracking({ widget: 'modal window' });
  const [showModal, setShowModal] = useState(false);
  // const [ID, setID] = useState(null);
  const productThumbnail = image;
  const { currentProduct } = useCurrentProduct();
  const [twoProductsArray, setTwoProductsArray] = useState([]);
  const twoProducts = [currentProduct];

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // setID(product);
    setShowModal(!showModal);
    trackEvent({ element: 'Comparison window' });

    axios({
      method: 'GET',
      url: `products/${product}`,
    })
      .then(({ data }) => {
        twoProducts.push(data);
        setTwoProductsArray(([]) => [...twoProducts]);
      });
  };

  const handleRemove = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem(product);
    trackEvent({ element: 'Remove item button' });
  };

  const exitModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(false);
  };

  useEffect(() => {
    const close = (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <CardImage url={productThumbnail || imageNotFound}>

      <ModalContainer show={showModal} onClick={(e) => exitModal(e)}>

        <ModalClose onClick={(e) => exitModal(e)}>&times;</ModalClose>
        <Modal show={showModal}>

          {twoProductsArray.length > 1 ? <Comparison twoProducts={twoProductsArray} /> : <div>Loading...</div>}
        </Modal>

      </ModalContainer>

      {star ? <CompareButton onClick={(e) => handleClick(e)}><FiBookOpen size={30} /></CompareButton> : <CloseButton onClick={(e) => handleRemove(e, product)}><FiTrash size={30} /></CloseButton>}

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
  color: grey;
  border: 2px, white;
  position: absolute;
  right: 8px;
  top: -3px;
  background-color: transparent;
  border: transparent;
  margin: 5px;
  z-index: 10;
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
  border-radius: 5px;
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

const CloseButton = styled.div`
  display: relative;
  position: absolute;
  top: 5px;
  right: 15px;
  background-color: transparent;
  border: none;
  color: grey;
`;

export default ProductImg;
