import React from 'react';
import styled from 'styled-components';
import { Individualcard, IndCard } from './Individualcard';
import ProductImg from './ProductImg';
import sampleRelatedData from './sampleRelatedData';
import sampleRelatedThumbnails from './sampleRelatedThumbnails';
import { RelatedProvider } from '../RelatedContext';
import { TestProvider, useTest } from './testingContext';
import { ThumbnailProvider, useThumbnail } from './thumbnailContext';

function AllCards() {
  const relatedProds = useTest();
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

  // console.log(zippedArray, 'this is zipped')

  if (!relatedProds.data) {
    console.log('loading Prods');
  } else {
    return (
      <RelatedProvider>
        <TestProvider>
          <ThumbnailProvider>

            <Layout>
              {zippedArray.map((item) => <div><Individualcard product={item} /></div>)}

            </Layout>
          </ThumbnailProvider>
        </TestProvider>
      </RelatedProvider>
    );
  }
}

const Layout = styled.div`
  display: flex;
  width: fit-content;
  overflow: flex;
  flex-direction: row;
`;

const Car = styled.div`
  display: flex;
  flex-direction: row;
`;
export default AllCards;
