import React from 'react';
import styled from 'styled-components';

import { useCurrentProduct } from '@Contexts/ProductIDContext';
import { useActiveStyle } from '@Contexts/StylesProvider';

import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';

function Overview() {
  const { activeStyle } = useActiveStyle();
  const { currentProduct } = useCurrentProduct();
  const photos = activeStyle ? activeStyle.photos : null;

  return (
    <>
      <ImageGallery photos={photos}>
        <Category>{currentProduct && currentProduct.category}</Category>
        <ProductName>{currentProduct ? currentProduct.name : 'Product Loading'}</ProductName>
        <Price>$159</Price>
        {activeStyle && <StyleSelector />}
        {activeStyle && <AddToCart />}
      </ImageGallery>

      <AdditionalDetails>
        <LongDescription>
          <h3>{currentProduct ? currentProduct.slogan : '' }</h3>
          <p>{currentProduct ? currentProduct.description : '' }</p>
        </LongDescription>
        <Features>
          <ul>
            {currentProduct
            && currentProduct.features.map((f) => (
              <li key={f.feature}>
                <strong>{`${f.feature}- `}</strong>
                {f.value}
              </li>
            ))}
          </ul>
        </Features>
      </AdditionalDetails>
    </>
  );
}

const AdditionalDetails = styled.section`
color: ${(props) => props.theme.colors.secondary};
display: block;
padding: 50px 100px;
& p {
padding-top: 10px;
}
`;

const LongDescription = styled.div`
display: inline-block;
width: 70%;
`;

const Features = styled.div`
display: inline-block;
width: 30%;
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
