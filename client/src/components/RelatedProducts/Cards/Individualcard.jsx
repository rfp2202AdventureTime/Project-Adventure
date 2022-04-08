import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import styled from 'styled-components';
import { useRelated, RelatedProvider } from '../RelatedContext';
// import sampleRelatedThumbnails from './sampleRelatedThumbnails';
import { useTest } from './testingContext';
import ProductImg from './ProductImg';

// should retrieve all related products from initial product page
// map each individual card with all the information

function Individualcard({ product }) {
  // console.log(product, 'IND Product');
  return (
    <div>
      <IndCard>
        <ProductImg image={product[1]} />
        <CardText>
          <p>{product[0].category}</p>
          <p>{product[0].name}</p>
          <p>
            $
            {product[0].default_price}
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
  height: max-content;
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
