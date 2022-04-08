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

  // console.log(thumbnail, 'relatedProds');
  if (!thumbnail.data) {
    console.log('loading thumbnail');
  } else {
    console.log(thumbnail.data[0].data.results[0].photos[0].thumbnail_url, 'this is thumbnail information');
  }

  if (!relatedProds.data) {
    console.log('loading Prods');
  } else {
    return (
      <RelatedProvider>
        <TestProvider>
          <ThumbnailProvider>

            <Layout>
              <ProductImg image={sampleRelatedThumbnails[0]} />

              {relatedProds.data.map((item) => <div><Individualcard product={item.data} /></div>)}

              {/* <IndCard>
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
              </IndCard> */}
            </Layout>
          </ThumbnailProvider>
        </TestProvider>
      </RelatedProvider>
    );
  }
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  flex-direction: row;
`;
export default AllCards;

{ /* {sampleRelatedThumbnails.map((item) => <ProductImg image={item} />)}
        {sampleRelatedData.map((item) => <Individualcard product={item} />)}
      </div> */ }
