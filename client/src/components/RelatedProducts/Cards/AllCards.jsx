/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Individualcard } from './Individualcard';
import { useProd } from './ProdContext';
import { useThumbnail } from './thumbnailContext';

function AllCards() {
  const relatedProds = useProd().relatedInformation;
  const thumbnail = useThumbnail();
  const ratings = useProd().ratingsMeta;
  console.log(thumbnail, 'this is thumbnail');

  const zippedArray = [];

  if (thumbnail.data && relatedProds.data && ratings) {
    relatedProds.data.map((item, i) => {
      zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url, ratings.data[i].data]);
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
  positive: relative;
  width: fit-content;
  height: max-content;
  flex-direction: row;
`;

export default AllCards;
