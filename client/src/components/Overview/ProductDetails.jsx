import React from 'react';
import styled from 'styled-components';

function ProductDetails() {
  return (
    <div>
      <Category>
        CATEGORY
      </Category>
      <ProductName>
        Expanded Product Name
      </ProductName>
      <Price>
        $159
      </Price>
    </div>
  );
}

const ProductName = styled.h1`
  font-weight: bold;
`;

const Category = styled.h3`
`;

const Price = styled.div`
  padding-bottom: 10px;
`;

export default ProductDetails;
