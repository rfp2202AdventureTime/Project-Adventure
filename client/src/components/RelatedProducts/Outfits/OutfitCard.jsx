import { React, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useCurrentStyles } from '../../../contexts/StylesProvider';
import { useMeta } from '../../../contexts/ReviewMeta';
import Star from '../../../Star';

function OutfitCard({ product, setOutfitArray, outfitArray }) {
  // console.log(useCurrentStyles()[0].photos[0].thumbnail_url, 'this is currentstyles');
  const thumbnail = useCurrentStyles()[0].photos[0].thumbnail_url;



  // use if add outfit array is more than 1
  const removeItem = (product) => {
    const remove = outfitArray.indexOf(product);
    console.log(remove, 'this is 1');

    if (remove > -1) {
      setOutfitArray((outfitArray => outfitArray.filter((product, i) => i === remove)
      ));

      console.log(outfitArray, 'this is array after removing');
    }
  };

  return (

    <IndCard>
      <CloseButton onClick={outfitArray.length === 1 ? () => setOutfitArray([]) : removeItem(product)}>
        X
      </CloseButton>
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
      <div><Star score={useMeta()} /></div>

    </IndCard>
  );
}

const IndCard = styled.div`
  display: table-cell, relative;
  position: relative;
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

const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 5px;
  right: 15px;
  background: transparent;
  border-style: transparent;
  font-color: yellow;
`;
const OutfitImg = styled.p`
  margin-top: 5px;
`;
export default OutfitCard;

{ /* <CloseButton onClick={() => setOutfitArray((outfitArray) => outfitArray.splice(removeItem, 1))}></CloseButton> */ }
