import React, { useContext } from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';

// should retrieve all related products from initial product page
// map each individual card with all the information

export default function Individualcard() {
  return (
    <div>
      <CardText>
        <p>{sampleData.products[1].category}</p>
        <p>{sampleData.products[1].name}</p>
        <p>
          $
          {sampleData.products[1].default_price}
        </p>
        <span>CSS rating with stars</span>
      </CardText>
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

const CardText = styled.ul`
  padding-left: 1px;
`;

export {
  Individualcard,
  IndCard,
};
