/* eslint-disable max-len */
import { React, useState } from 'react';
import { useProd } from '../contexts/ProdContext';
import { useThumbnail } from '../contexts/thumbnailContext';
import CarouselRelated from './CarouselR';

function AllCards() {

  const { relatedInformation } = useProd();
  const thumbnail = useThumbnail();
  const { ratingsMeta } = useProd();
  const information = [];

  if (thumbnail?.data && relatedInformation?.data && ratingsMeta) {
    relatedInformation?.data.map((item, i) => {
      const currentRating = ratingsMeta.data[i]?.data ? ratingsMeta.data[i].data : 0;
      const currentThumbnail = thumbnail.data[i]?.data.results[0].photos[0].thumbnail_url ? thumbnail.data[i].data.results[0].photos[0].thumbnail_url : '';
      information.push([item.data, currentThumbnail, currentRating, true]);
    });
  }

  const stagingSet = new Set();

  for (let i = 0; i < information.length; i += 1) {
    if (!stagingSet.has(JSON.stringify(information[i]))) {
      stagingSet.add(JSON.stringify(information[i]));
    }
  }

  const informationArray = [];
  for (const item of stagingSet) {
    informationArray.push(JSON.parse(item))
  }
    return (
      <>
      {informationArray ? <CarouselRelated informationArray={informationArray} /> : <div>Related Products Loading</div>}
      </>
    );
  }

export default AllCards;

