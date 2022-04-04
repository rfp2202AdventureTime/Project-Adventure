import React from 'react';
import styled from 'styled-components';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

function Overview() {
  return (
    <>
      <ExpandedImageGallery>

        <DefaultImageGallery>
          <ImageGallery />
        </DefaultImageGallery>

        <ProductInfo>
          <ProductDetails />
          <StyleSelector />
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
  min-height: 630px;
`;

const DefaultImageGallery = styled.div`
  background-color:${(props) => props.theme.colors.background};
  width: 67.5%;
`;

const ProductInfo = styled.div`
  background-color:${(props) => props.theme.colors.light};
  width: 32.5%;

`;

export default Overview;
