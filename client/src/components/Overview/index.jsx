import React, { useState } from 'react';
import styled from 'styled-components';

import { useActiveStyle } from '@Contexts/ActiveStyleId';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

function Overview() {
  const { activeStyle } = useActiveStyle();
  const [galleryView, setGalleryView] = useState('default');

  const handleExpandedView = (e) => {
    if (e.target === e.currentTarget && galleryView === 'default') {
      setGalleryView('expanded');
    }
  };

  const handleDefaultView = (e) => {
    if (e.target === e.currentTarget && galleryView === 'expanded') {
      setGalleryView('default');
    }
  };

  // Only render the Overview component if there's an active style.
  // Eventually, add more graceful loading.

  if (activeStyle) {
    return (
      <>
        <ExpandedImageGallery>
          <DefaultImageGallery>
            <DefaultImageGalleryViewport className={galleryView}>
              <ImageGallery
                view={galleryView}
                handleExpandedView={handleExpandedView}
                handleDefaultView={handleDefaultView}
              />
            </DefaultImageGalleryViewport>
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

const DefaultImageGalleryViewport = styled.div`
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
  padding: 10px;
`;

export default Overview;
