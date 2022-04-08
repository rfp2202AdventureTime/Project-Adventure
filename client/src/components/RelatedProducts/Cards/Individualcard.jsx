import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import styled from 'styled-components';
import { useRelated, RelatedProvider } from '../RelatedContext';
import sampleRelatedThumbnails from './sampleRelatedThumbnails';
import { useTest } from './testingContext';

// should retrieve all related products from initial product page
// map each individual card with all the information

function Individualcard({ product }) {

  // console.log(thumbnail, 'IND Product');

  return (
    <div>
      <IndCard>
        <CardText>
          <p>TEST</p>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>
            $
            {product.default_price}
          </p>
          <p>CSS rating with stars</p>
        </CardText>
      </IndCard>
    </div>
  );
}

const IndCard = styled.div`
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 0 15px 0 15px;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;

const CardText = styled.div`
  padding-left: 1px;
`;

export {
  Individualcard,
  IndCard,
};


//line 12
// const sample = useTest();
//   const information = [];
// if (!sample.data) {
//   console.log('loading');
// } else {
//   console.log(sample, 'this is test context');
//   sample.data.map((item) => {
//     information.push(item.data);
//   });
//   console.log(information, 'this is information');
// }