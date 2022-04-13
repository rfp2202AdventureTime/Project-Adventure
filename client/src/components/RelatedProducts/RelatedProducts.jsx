import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfits/Outfit';
import { RelatedProvider } from './contexts/RelatedContext';
import { ProdProvider } from './contexts/ProdContext';
import { ThumbnailProvider } from './contexts/thumbnailContext';
import AllCards from './Cards/AllCards';

function RelatedProducts() {
  return (
    <RelatedProductsSection>

      <h1>Related Products</h1>

      <RelatedProvider>
        <ProdProvider>
          <ThumbnailProvider>

            <AllCards />

          </ThumbnailProvider>
        </ProdProvider>
      </RelatedProvider>

      <h1>Your Outfit</h1>

      <Outfit />

    </RelatedProductsSection>
  );
}

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
