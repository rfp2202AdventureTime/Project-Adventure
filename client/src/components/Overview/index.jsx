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
  const currentStyles = useContext(CurrentStyles);
  const [activeStyleId] = useContext(ActiveStyleId);
  const activeStyle = getStyle(currentStyles, activeStyleId);

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
      <PreviewStyleProvider>
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
      </PreviewStyleProvider>
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
    width: 1280px;
    transition: width 1s ease-in-out;
  }
  &.default {
    width: 100%;
    transition: width 1s ease-in-out;
  }
`;

const ProductInfo = styled.section`
  background-color:${(props) => props.theme.colors.light};
  max-width: 480px;
  padding: 10px;
`;

export default Overview;
