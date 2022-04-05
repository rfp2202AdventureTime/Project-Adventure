import React, { useState } from 'react';
import styled from 'styled-components';

import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';

import { ActiveStyleId } from '../../CurrentStylesContext';

// Using dummy data for now.
import styleData from './StyleSelectorData';

function Overview() {
  const [activeStyleId, setActiveStyleId] = useState(styleData[0].results[0].style_id);

  return (
    // Refactor this so that we aren't passing the state hooks directly.
    // It's throwing a linting warning but not sure why.
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ActiveStyleId.Provider value={[activeStyleId, setActiveStyleId]}>
      <ExpandedImageGallery>

        <DefaultImageGallery>
          <ImageGallery />
        </DefaultImageGallery>

        <ProductInfo>
          <ProductDetails />
          <StyleSelector />
          <AddToCart />
        </ProductInfo>

      </ExpandedImageGallery>

      <ProductDescription />
    </ActiveStyleId.Provider>
  );
}

const ExpandedImageGallery = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  min-height: 630px;
`;

const DefaultImageGallery = styled.div`
  background-color:${(props) => props.theme.colors.background};
  width: 67.5%;
`;

const ProductInfo = styled.div`
  background-color:${(props) => props.theme.colors.light};
  width: 32.5%;
  padding: 10px;
`;

export default Overview;
