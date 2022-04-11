import { React, useState } from 'react';
import styled from 'styled-components';
import { useCurrentProduct } from '../../../contexts/ProductIDContext';

import OutfitCard from './OutfitCard';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

// change image to cover
export default function Outfit() {
  const productToAdd = useCurrentProduct().currentProduct;
  const initialArray = [];
  const [outfitArray, setOutfitArray] = useState(initialArray);

  return (

    <AddSection>
      <AddButton>

        <img
          src="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
          alt="plus sign"
          width={175}
          height={200}
          onClick={() => setOutfitArray((initialArray) => [...outfitArray, productToAdd])}
        />

        <OutfitText>Add to Outfit</OutfitText>

      </AddButton>
      <AddedOutfit>

        {outfitArray.map((item, key) => <OutfitCard product={item} key={key} outfitArray={outfitArray} setOutfitArray={setOutfitArray} />)}
      </AddedOutfit>
    </AddSection>

  );
}

const AddSection = styled.div`
  display: flex;
  width: fit-content;
  height: max-content;
  flex-direction: row;
`;

const AddedOutfit = styled.div`
  display: flex;
  float: left;
  flex-direction: row;
  // border-style: solid;
  border-width: 2px;
  width: fit-content;
  height: fit-content;
  margin-right: 30px;
  margin-left: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  justify-content: space-evenly;
  // &:hover {
  //   box-shadow: 0 8px 16px 0;
  // }
`;

const AddButton = styled.div`
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }

`;
const OutfitText = styled.p`
  text-align: center;
`;
