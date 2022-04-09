import React from 'react';
import styled from 'styled-components';
import Outfit from './Outfit';
import { RelatedProvider } from './RelatedContext';
import { ProdProvider } from './Cards/ProdContext';
import { ThumbnailProvider } from './Cards/thumbnailContext';
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
      <Layout>
        <Outfit />

      </Layout>
    </RelatedProductsSection>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`;

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
