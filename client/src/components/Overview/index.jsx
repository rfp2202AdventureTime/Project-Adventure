import React, { useState } from 'react';
import styled from 'styled-components';

import { useActiveStyle } from '@Contexts/StylesProvider';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

function Overview() {
  const { activeStyle } = useActiveStyle();
  const [view, setView] = useState('default');

  const handleViewChange = (e, newView) => {
    if (e.target === e.currentTarget) setView(newView);
  };

  if (activeStyle) {
    return (
      <>
        <ExpandedImageGallery>
          <DefaultImageGallery>
            <ImageGalleryViewport className={view}>
              <ImageGallery view={view} handleViewChange={handleViewChange} />
            </ImageGalleryViewport>
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

export default Overview;
