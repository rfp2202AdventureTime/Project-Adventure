import React from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';
import { Individualcard, IndCard } from './Cards/Individualcard';
import Outfit from './Outfit';
import { RelatedProvider } from './RelatedContext';

import AllCards from './Cards/AllCards';

function RelatedProducts() {
  return (
    <RelatedProductsSection>

      <h1>Related Products</h1>
      <RelatedProvider>

        <AllCards />

      </RelatedProvider>
      <h1>Your Outfit</h1>
      <Layout>
        <Outfit />
        {/* <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard> */}

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
