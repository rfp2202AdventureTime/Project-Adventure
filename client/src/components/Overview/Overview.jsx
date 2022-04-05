import React from 'react';
import styled from 'styled-components';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

<<<<<<< HEAD
import { ActiveStyleProvider } from '@Contexts/ActiveStyleId';
=======
import { ActiveStyleProvider } from '../../contexts/ActiveStyleId';
import { PreviewStyleProvider } from '../../contexts/PreviewStyleId';
>>>>>>> 0b5af1f (Add hover preview to StyleSelector)

function Overview() {
  return (
    <ActiveStyleProvider>
      <PreviewStyleProvider>
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
      </PreviewStyleProvider>
    </ActiveStyleProvider>
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
  padding: 10px;
`;

export default Overview;
