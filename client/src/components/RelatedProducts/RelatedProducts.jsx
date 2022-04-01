import React from 'react';
import styled from 'styled-components';

function RelatedProducts() {
  return (
    <RelatedProductsSection>
      <h1>Related Products</h1>
    </RelatedProductsSection>
  );
}

const RelatedProductsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;

export default RelatedProducts;
