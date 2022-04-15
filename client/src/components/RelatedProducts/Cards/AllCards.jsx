/* eslint-disable max-len */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useProd } from '../contexts/ProdContext';
import { useThumbnail } from '../contexts/thumbnailContext';
import CarouselRelated from './CarouselRelated';
import { useCurrentStyles, useActiveStyle } from '../../../contexts/StylesProvider';
import { useRelated } from '../contexts/RelatedContext';
import Console from '../../../Console';


function AllCards() {
  const { relatedInformation } = useProd();
  const { ratingsMeta } = useProd();
  const [relatedStyles, setRelatedStyles] = useState()
  const thumbnail = useThumbnail();
  const information = [];
  const currentStyles = useCurrentStyles()
  const related = useRelated()

  useEffect(() => {
    if (related) {
      Promise.all(related.map((number) => axios({
        method: 'get',
        url: `products/${number}/styles`,
      })))
        .then((data) => {
          setRelatedStyles({ data });
        })
        .catch((err) => Console.log('there was an ERROR in AllCards', err));
    }
  }, [related]);

    if (thumbnail?.data && relatedInformation?.data && ratingsMeta && currentStyles && relatedStyles) {
      relatedInformation?.data.map((item, i) => {
        const currentRating = ratingsMeta.data[i]?.data ? ratingsMeta.data[i].data : 1;

        const currentThumbnail = thumbnail.data[i]?.data.results[0].photos[0].thumbnail_url ? thumbnail.data[i].data.results[0].photos[0].thumbnail_url : '';

        const activeSalePrice = relatedStyles?.data[i]?.data.results[0].sale_price || null

        item.data['sale_price'] = activeSalePrice;
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
      {(thumbnail?.data && relatedInformation?.data && ratingsMeta && currentStyles && relatedStyles) ? <CarouselRelated informationArray={informationArray} /> : <Loader alt="loading" src="spinner.gif" />}
      </>
    );
  }


  const Loader = styled.img`
  height: 100px;
  display: inline-block;
  margin: 0 auto;
`;
export default AllCards;
