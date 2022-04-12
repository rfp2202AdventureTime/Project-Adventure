/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg';
import Star from '../../../Star';
import { ProductIDContext, ProductProvider } from '../../../contexts/ProductIDContext';

// receives array [product information, thumbnail url]
function Individualcard({ product }) {
  const [productPicked, setProductPicked] = useState(ProductIDContext);
  // const productPicked = product[0].id;
  const starRating = product[2].avgRating;

  console.log(ProductIDContext, 'provider1');

  useEffect(() => {
    console.log(productPicked, 'this is product picked');
    console.log(ProductIDContext, 'provider2');


  }, [productPicked]);


  return (
    <ProductProvider value={productPicked}>
    <div>
      <IndCard onClick={() => setProductPicked(product[0].id)}>
        <ProductImg image={product[1]} product={product[0].id} />

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
    </ProductProvider>
  );
}

const IndCard = styled.div`
  display: table-cell, relative;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  width: 250px;
  height: fit-content;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  // padding: 0 15px 0 15px;
  &:hover {
    box-shadow: 0 0 6px rgba(90, 90, 90, 0.8);
  }
  object-fit: cover;
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
