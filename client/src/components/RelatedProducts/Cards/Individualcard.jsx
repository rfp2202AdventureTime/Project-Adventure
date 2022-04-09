import React from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg';

// should retrieve all related products from initial product page
// map each individual card with all the information

// receives array [product information, thumbnail url]
function Individualcard({ product }) {
  return (
    <div>
      <IndCard>
        <ProductImg image={product[1]} />
        <CardText>
          <CategoryText>
            <div>{product[0].category}</div>
          </CategoryText>
          <p>{product[0].name}</p>
          <p>
            $
            {product[0].default_price}
          </p>
          <p>Stars</p>
        </CardText>
      </IndCard>
    </div>
  );
}

const IndCard = styled.div`
  display: table-cell;
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  height: fit-content;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 0 15px 0 15px;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;

const CategoryText = styled.div`
  font-style: italic;
`;
const CardText = styled.div`
  padding-left: 1px;
`;

export {
  Individualcard,
  IndCard,
};
