import React from 'react';
import styled from 'styled-components';
import sampleData from './../../sampleData';

const IndCard = styled.div`
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  margin-right: 7px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;
const CardText = styled.p`
  padding-left: 2px;
`;
// should retrieve all related products from initial product page
// map each individual card with all the information
function Individualcard() {
  return (
    <div>
      <CardText>
        <p>{sampleData.products[1].category}</p>
        <p>{sampleData.products[1].name}</p>
        <p>${sampleData.products[1].default_price}</p>
        <span>CSS rating with stars</span>
      </CardText>
    </div>
  );
}

export {
  Individualcard,
  IndCard,
};
