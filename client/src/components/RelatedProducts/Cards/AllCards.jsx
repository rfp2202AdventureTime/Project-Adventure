/* eslint-disable max-len */
import { React, useState } from 'react';

import { useProd } from '../contexts/ProdContext';
import { useThumbnail } from '../contexts/thumbnailContext';
import CarouselRelated from './CarouselR';

function AllCards() {

  const relatedProds = useProd().relatedInformation;
  const thumbnail = useThumbnail();
  const ratings = useProd().ratingsMeta;

  // const [zippedArray, setZippedArray] = useState([])
  const zippedArray = [];

  if (thumbnail?.data && relatedProds?.data && ratings) {
    relatedProds?.data.map((item, i) => {
      zippedArray.push([item.data, thumbnail.data[i].data.results[0].photos[0].thumbnail_url, ratings.data[i].data, true]);
    });
  }

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

