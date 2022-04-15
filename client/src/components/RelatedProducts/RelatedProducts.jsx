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

      <RelatedHeader>Related Products</RelatedHeader>
      {/* <h1 id="ratings">Related Products</h1> */}

      <RelatedProvider>
        <ProdProvider>
          <ThumbnailProvider>

            <AllCards />

          </ThumbnailProvider>
        </ProdProvider>
      </RelatedProvider>

      <RelatedHeader>Your Outfit</RelatedHeader>

      <Outfit />

    </RelatedProductsSection>
  );
}

const RelatedHeader = styled.h1`
  text-transform: uppercase;
  padding-left: 10px;
`;

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
