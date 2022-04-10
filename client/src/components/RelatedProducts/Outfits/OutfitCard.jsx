import { React, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useCurrentProduct, useCurrentProductId } from '../../../contexts/ProductIDContext';
import { useCurrentStyles } from '../../../contexts/StylesProvider';

function OutfitCard({ product }) {
  // console.log(useCurrentStyles()[0].photos[0].thumbnail_url, 'this is currentstyles');
  const thumbnail = useCurrentStyles()[0].photos[0].thumbnail_url;

  return (
    // <ProductImg image={product[1]} product={product[0].id} />
    <IndCard>
      <OutfitImg>

        <img
          src={thumbnail}
          alt="it's borked yo"
        />
      </OutfitImg>
      <div>{product.category}</div>
      <p>{product.name}</p>
      <p>
        $
        {product.default_price}
      </p>
      <p>Stars</p>

    </IndCard>
  );
}

const IndCard = styled.div`
  display: table-cell, relative;
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  height: fit-content;
  margin-top: 5px;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 0 15px 0 15px;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;

const OutfitImg = styled.p`
  margin-top: 5px;
`;
export default OutfitCard;
