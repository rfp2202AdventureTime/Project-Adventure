import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { PreviewStyleProvider } from '@Contexts/PreviewStyleId';

import { CurrentStyles } from '@Contexts/CurrentStyles';
import { ActiveStyleId } from '@Contexts/ActiveStyleId';
import getStyle from './helpers/getStyle';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

function Overview() {
  const [galleryView] = useState('default');
  const currentStyles = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const activeStyle = getStyle(currentStyles, activeStyleId);

  // Only render the Overview component if there's an active style.
  // Eventually, add more graceful loading.

  if (activeStyle) {
    return (
      <PreviewStyleProvider>
        <ExpandedImageGallery>

          <DefaultImageGallery view={galleryView}>
            <ImageGallery view={galleryView} />
          </DefaultImageGallery>

          <ProductInfo>
            <ProductDetails />
            <StyleSelector />
            <AddToCart />
          </ProductInfo>

        </ExpandedImageGallery>

        <ProductDescription />
      </PreviewStyleProvider>
    );
  }
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
