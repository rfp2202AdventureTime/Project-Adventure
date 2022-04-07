import React, { useState } from 'react';
import styled from 'styled-components';

import { useCurrentProduct } from '@Contexts/ProductIDContext';
import { useActiveStyle } from '@Contexts/StylesProvider';

import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

function Overview() {
  const { activeStyle } = useActiveStyle();
  const { currentProduct } = useCurrentProduct();
  const [view, setView] = useState('default');

  const handleViewChange = (e, newView) => {
    if (e.target === e.currentTarget) setView(newView);
  };

  return (
    <>
      <ExpandedImageGallery>
        <DefaultImageGallery>
          <ImageGalleryViewport className={view}>
            {activeStyle && <ImageGallery view={view} handleViewChange={handleViewChange} />}
          </ImageGalleryViewport>
        </DefaultImageGallery>

        <ProductInfo>
          <Category>{currentProduct ? currentProduct.category : ''}</Category>
          <ProductName>{currentProduct ? currentProduct.name : 'Product Loading'}</ProductName>
          <Price>$159</Price>
          {activeStyle && <StyleSelector />}
          <AddToCart />
        </ProductInfo>
      </ExpandedImageGallery>

      <ProductDescription />
    </>
  );
}

const ExpandedImageGallery = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  height: 630px;
`;

const DefaultImageGallery = styled.div`
  width: 800px;
  overflow: visible;
  z-index: 2;
`;

const ImageGalleryViewport = styled.div`
  background-color:${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  &.expanded {
    width: ${() => document.getElementById('main').offsetWidth}px;
    transition: width 1s ease-in-out;
  }
  &.default {
    width: 100%;
    transition: width 1s ease-in-out;
  }
`;

const ProductInfo = styled.section`
  background-color:${(props) => props.theme.colors.light};
  width: 480px;
  padding: 10px 30px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ProductName = styled.h1`
  font-weight: bold;
`;

const Category = styled.h3`
`;

const Price = styled.div`
  padding-bottom: 10px;
`;

export default Overview;
