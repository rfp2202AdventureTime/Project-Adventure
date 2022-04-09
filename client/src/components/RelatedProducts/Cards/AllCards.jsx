import React from 'react';
import styled from 'styled-components';
import { Individualcard } from './Individualcard';
import { useProd } from './ProdContext';
import { useThumbnail } from './thumbnailContext';

function AllCards() {
  const relatedProds = useProd();
  const thumbnail = useThumbnail();

  const zippedArray = [];
  if (!thumbnail.data) {
    console.log('loading thumbnail');
  } if (!relatedProds.data) {
    console.log('loading related prods');
  } else {
    relatedProds.data.map((item, i) => {
      zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url]);
    });
  }

  if (!relatedProds.data) {
    console.log('loading Prods');
  } else {
    return (

      <Layout>
        {zippedArray.map((item, key) => <div><Individualcard product={item} key={key} /></div>)}

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
