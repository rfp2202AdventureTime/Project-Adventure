import React from 'react';
import styled from 'styled-components';

import { FiCheck } from 'react-icons/fi';

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
          <FeatureItems>
            {currentProduct
            && currentProduct.features.map((f) => (
              <FeatureItem key={f.feature}>
                <FiCheck size={18} />
                <strong>{`${f.feature}: `}</strong>
                {f.value}
              </FeatureItem>
            ))}
          </FeatureItems>
        </Features>
      </AdditionalDetails>
    </>
  );
}

const FeatureItems = styled.ul`
  list-style-type: none;
  margin: 0 0 0 30px;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 0.8em;
  & > * {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: -4px;
  }
`;

const AdditionalDetails = styled.section`
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  padding: 50px 100px;
  & p {
    padding-top: 10px;
  }
`;

const LongDescription = styled.div`
  display: inline-block;
  width: 65%;
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
`;

const Features = styled.div`
  display: inline-block;
  width: 35%;
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 2em;
`;

const Category = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.9em;
`;

const Price = styled.div`
  padding-bottom: 10px;
`;

export default Overview;
