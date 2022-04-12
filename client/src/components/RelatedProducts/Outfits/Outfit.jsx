import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCurrentProduct } from '../../../contexts/ProductIDContext';

import OutfitCard from './OutfitCard';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

// change image to cover
export default function Outfit() {
  const productToAdd = useCurrentProduct().currentProduct;
  const [outfitArray, setOutfitArray] = useState([]);
  const AddToStorage = (product) => {
    console.log(product, 'product');
    localStorage.setItem(product.id, JSON.stringify(product))
  };


  const itemsLocal = { ...localStorage };

  const keys = Object.keys(itemsLocal);
  console.log(keys, 'this is keys')

  const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));

  // setOutfitArray(testingArray);
  console.log(testingArray, 'this is testing array')
  useEffect(() => {
    // localStorage.setItem(productToAdd.id, JSON.stringify(productToAdd));

  }, [outfitArray]);

  localStorage.clear();
  return (

    <AddSection>
      <AddButton>

        {/* <CardImage
    url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
    onClick={() => setOutfitArray(([]) => [...outfitArray, productToAdd])}
    /> */}

        <CardImage
          url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
          onClick={() => AddToStorage(productToAdd)}
        />

        <OutfitText>Add to Outfit</OutfitText>

      </AddButton>
      <AddedOutfit>

        {localStorage.length > 1 ? testingArray.map((item, key) => <OutfitCard product={item} key={key} />) : null }


      </AddedOutfit>
    </AddSection>

  );
}


const CardImage = styled.div`
  width: 250px;
  height: 265px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  // margin-right: 5px;
`;
const AddSection = styled.div`
  display: flex;
  width: fit-content;
  height: 310px;
  flex-direction: row;
  margin-right: 10px;

`;

const AddedOutfit = styled.div`

  display: relative;
  margin-left: 15px;
  height: fit-content;
  flex-direction: row;

`;

const AddButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 6px rgba(90, 90, 90, 0.8);
  }
  margin-right: 5px;
`;
const OutfitText = styled.p`
  text-align: center;
`;
