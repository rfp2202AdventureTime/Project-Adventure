/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiBookOpen, FiTrash } from 'react-icons/fi';
import Comparison from './Comparison';
import { FeatureProvider } from '../contexts/FeatureContext';
import useTracking from '@Contexts/ClickTracker';
import { ModalClose } from '../../../contexts/Shared.styled';

function ProductImg({ image, product, star }) {
  const { trackEvent } = useTracking({ widget: 'modal window'});
  const [showModal, setShowModal] = useState(false);
  const [ID, setID] = useState();
  const productThumbnail = image;
  const imageNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

  const handleClick = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
    setID(product);
    trackEvent({ element: 'Comparison window' });
  };

  const handleRemove = (e, product) => {
    e.stopPropagation();
    localStorage.removeItem(product);
    trackEvent({ element: 'Remove item button' });
  };

  const exitModal = () => {
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
    <CardImage url={productThumbnail ? productThumbnail : imageNotFound}>
      <FeatureProvider prodID={ID}>

        <ModalContainer show={showModal} onClick={(e) => e.stopPropagation()}>

          <Modal show={showModal}>
            <ModalClose onClick={exitModal}> X </ModalClose>

            <Comparison />
          </Modal>

        </ModalContainer>

        {star ? <CompareButton onClick={(e) => handleClick(e)}><FiBookOpen size={30} /></CompareButton> : <CloseButton onClick={(e) => handleRemove(e, product)}><FiTrash size={30} /></CloseButton>}

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

// const ModalClose = styled.div`
//   position: fixed;
//   color: white;
//   line-height: 50px;
//   font-size: 2rem;
//   // position: absolute;
//   right: 0;
//   text-align: center;
//   top: 0;
//   width: 70px;
//   text-decoration: none;
//   z-index: 9998;
//   cursor: pointer;
//   &:hover {
//     color: #000;
//   }

// `;
export default ProductImg;
