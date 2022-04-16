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
  const thumbnail = useThumbnail();
  const information = [];
  const related = useRelated()

    if (thumbnail?.data && relatedInformation?.data && ratingsMeta) {
      relatedInformation?.data.map((item, i) => {

        const activeSalePrice = thumbnail.data[i]?.data.results[0].sale_price ? thumbnail.data[i]?.data.results[0].sale_price : null;

        const currentThumbnail = thumbnail.data[i]?.data.results[0].photos[0].thumbnail_url ? thumbnail.data[i].data.results[0].photos[0].thumbnail_url : '';

        item.data['sale_price'] = activeSalePrice;
        item.data['avgRating'] = ratingsMeta[i]
        information.push([item.data, currentThumbnail, true]);
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
      {(thumbnail?.data && relatedInformation?.data && ratingsMeta) ? <CarouselRelated informationArray={informationArray} /> : <Loader alt="loading" src="spinner.gif" />}
      </>
    );
  }


  const Loader = styled.img`
  height: 100px;
  display: inline-block;
  margin: 0 auto;
`;
export default AllCards;
