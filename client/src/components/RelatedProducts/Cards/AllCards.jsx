import React from 'react';
import styled from 'styled-components';
import { Individualcard, IndCard } from './Individualcard';
import ProductImg from './ProductImg';
import sampleRelatedData from './sampleRelatedData';
import sampleRelatedThumbnails from './sampleRelatedThumbnails';

const Layout = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  flex-direction: row;
`;

function AllCards() {
  return (
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
  );
}

export default AllCards;
