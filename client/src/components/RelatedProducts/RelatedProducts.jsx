import React from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';
import { Individualcard, IndCard } from './Individualcard';
import ProductImg from './ProductImg';
import Outfit from './Outfit';
import { RelatedProvider } from './RelatedContext';
import sampleRelatedData from './sampleRelatedData';
import sampleRelatedThumbnails from './sampleRelatedThumbnails';

const Layout = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`;

function RelatedProducts() {
  return (
    <RelatedProductsSection>

      <h1>Related Products</h1>
      <RelatedProvider>

        <Layout>

          <IndCard>
            <ProductImg image={sampleRelatedThumbnails[0]} />
            <Individualcard product={sampleRelatedData[0]} />
          </IndCard>

          <IndCard>
            <ProductImg image={sampleRelatedThumbnails[1]} />
            <Individualcard product={sampleRelatedData[1]} />
          </IndCard>

          <IndCard>
            <ProductImg image={sampleRelatedThumbnails[2]} />
            <Individualcard product={sampleRelatedData[2]} />
          </IndCard>

          <IndCard>
            <ProductImg image={sampleRelatedThumbnails[3]} />
            <Individualcard product={sampleRelatedData[3]} />
          </IndCard>

        </Layout>

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

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
