import React from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';
import { Individualcard, IndCard } from './Individualcard';
import ProductImg from './ProductPhoto';
import Outfit from './Outfit';
// import ComparisonTable from './ComparisonTable';

const Layout = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
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

      <h1>Your Outfit</h1>
      <Layout>
        <Outfit />
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
