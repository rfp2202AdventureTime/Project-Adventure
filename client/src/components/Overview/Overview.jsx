import React from 'react';
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
  const photos = activeStyle ? activeStyle.photos : [];

  return (
    <>
      <ImageGallery photos={photos}>
        <ProductInfo>
          <Category>{currentProduct ? currentProduct.category : ''}</Category>
          <ProductName>{currentProduct ? currentProduct.name : 'Product Loading'}</ProductName>
          <Price>$159</Price>
          {activeStyle && <StyleSelector />}
          <AddToCart />
        </ProductInfo>
      </ImageGallery>

      <ProductDescription />
    </>
  );
}

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
