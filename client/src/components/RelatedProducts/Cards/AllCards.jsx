/* eslint-disable max-len */
import { React, useState } from 'react';

import { useProd } from '../contexts/ProdContext';
import { useThumbnail } from '../contexts/thumbnailContext';
import CarouselRelated from './CarouselR';

function AllCards() {

  const relatedProds = useProd().relatedInformation;
  const thumbnail = useThumbnail();
  const ratings = useProd().ratingsMeta;


  const zippedArray = [];

  if (thumbnail?.data && relatedProds?.data && ratings) {
    relatedProds?.data.map((item, i) => {
      const currentRating = ratings.data[i]?.data ? ratings.data[i].data : 0;
      const currentThumbnail = thumbnail.data[i]?.data.results[0].photos[0].thumbnail_url ? thumbnail.data[i].data.results[0].photos[0].thumbnail_url : '';
      zippedArray.push([item.data, currentThumbnail, currentRating, true]);
    });
  }

  // console.log(zippedArray, 'this is zipped array')


  // if (zippedArray) {
    return (

      <>
      {zippedArray ? <CarouselRelated zippedArray={zippedArray} /> : <div>Related Products Loading</div>}
        {/* <CarouselRelated zippedArray={zippedArray} /> */}

      </>

    );
  }
// }

export default AllCards;

// const zippedArray = [];

//   if (thumbnail?.data && relatedProds?.data && ratings) {
//     relatedProds?.data.map((item, i) => {
//       zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url, ratings.data[i].data, true]);
//     });
//   }

//   // if (zippedArray) {
//     return (

//       <>
//       {zippedArray ? <CarouselRelated zippedArray={zippedArray} /> : <div>Related Products Loading</div>}
//         {/* <CarouselRelated zippedArray={zippedArray} /> */}

//       </>

//     );
//   }
// // }

