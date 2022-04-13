/* eslint-disable max-len */
import React from 'react';
import { useProd } from './ProdContext';
import { useThumbnail } from './thumbnailContext';
import CarouselRelated from './CarouselR';

function AllCards() {
  const relatedProds = useProd().relatedInformation;
  const thumbnail = useThumbnail();
  const ratings = useProd().ratingsMeta;

  const zippedArray = [];

  if (thumbnail.data && relatedProds.data && ratings) {
    relatedProds.data.map((item, i) => {
      zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url, ratings.data[i].data, true]);
    });
  }

  if (zippedArray) {
    return (

      <CarouselRelated zippedArray={zippedArray} />

    );
  }
}

export default AllCards;
