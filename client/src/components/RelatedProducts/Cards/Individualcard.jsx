/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg';
import Star from '../../../Star';

// receives array [product information, thumbnail url]
function Individualcard({ product }) {
  const starRating = product[2].avgRating;
  return (
    <div>
      <IndCard>
        <ThumbnailImage>
          <ProductImg image={product[1]} product={product[0].id} />

        </ThumbnailImage>
        <CardText>
          <CategoryText>
            <div>{product[0].category}</div>
          </CategoryText>
          <p>{product[0].name}</p>
          <p>
            $
            {product[0].default_price}
          </p>
          <div>
            <Star score={starRating} />
            {' '}
          </div>
        </CardText>
      </IndCard>
    </div>
  );
}

const IndCard = styled.div`
  display: table-cell, relative;
  position: relative;
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

const ThumbnailImage = styled.div`
  margin-top: 5px;
`;

export {
  Individualcard,
  IndCard,
};
