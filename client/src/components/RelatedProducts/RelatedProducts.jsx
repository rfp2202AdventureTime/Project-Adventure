import React from 'react';
import styled from 'styled-components';
import sampleData from './../../sampleData.js';
import { Individualcard, IndCard } from './Individualcard';
import ProductImg from './ProductPhoto';

const Layout = styled.div`
  display: flex;
  width: max-content;
`;

function RelatedProducts() {
  return (
    <RelatedProductsSection>
      <h1>Related Products</h1>

      <Layout>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

      </Layout>

      <h1>Your Outfits</h1>
      <Layout>
        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

        <IndCard>
          <ProductImg />
          <Individualcard />
        </IndCard>

      </Layout>

    </RelatedProductsSection>
  );
}

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
