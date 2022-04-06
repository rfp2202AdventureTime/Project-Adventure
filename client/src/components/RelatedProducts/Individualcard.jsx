import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { RelatedContext } from './RelatedContext';
// import sampleData from '../../sampleData';

// should retrieve all related products from initial product page
// map each individual card with all the information

export default function Individualcard() {
  const productInfo = useContext(RelatedContext);
  console.log(productInfo, 'info');

  if (!productInfo) {
    console.log('waiting');
  } else {
    return (
      <div>
        <CardText>
          <ul>{productInfo.category}</ul>
          <ul>{productInfo.name}</ul>
          <ul>
            $
            {productInfo.default_price}
          </ul>
          <span>CSS rating with stars</span>
        </CardText>
      </div>
    );
  }
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

const CardText = styled.ul`
  align-item: left;
`;

export {
  Individualcard,
  IndCard,
};
