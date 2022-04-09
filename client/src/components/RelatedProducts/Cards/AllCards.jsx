import React from 'react';
import styled from 'styled-components';
import { Individualcard } from './Individualcard';
import { useProd } from './ProdContext';
import { useThumbnail } from './thumbnailContext';

function AllCards() {
  const relatedProds = useProd();
  const thumbnail = useThumbnail();

  const zippedArray = [];

  if (thumbnail.data && relatedProds.data) {
    relatedProds.data.map((item, i) => {
      zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url]);
    });
  }

  if (relatedProds.data) {
    return (

      <Layout>
        {zippedArray.map((item, key) => <Individualcard product={item} key={key} />)}

      </Layout>

    );
  }
}

const Layout = styled.div`
  display: flex;
  width: fit-content;
  height: max-content;
  flex-direction: row;
`;

export default AllCards;
