import React from 'react';
import styled from 'styled-components';
import sampleData from './../../sampleData';

const IndCard = styled.div`
  border-style: solid;
  border-width: 2px;
  width: 30%;
  margin: 5px;
`;

function Individualcard() {
  return (
    <div>
      <p>Category: {sampleData.products[1].category}</p>
      <p>{sampleData.products[1].name}</p>
      <p>${sampleData.products[1].default_price}</p>
      <span>CSS rating with stars</span>
    </div>
  );
}

export {
  Individualcard,
  IndCard,
};
