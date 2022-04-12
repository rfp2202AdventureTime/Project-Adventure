import { React, useState, useEffect } from 'react';
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

  const AddToStorage = (product) => {
    // console.log(product)
    localStorage.setItem(product.id, JSON.stringify(product));
    setOutfitArray(productToAdd);
  };

  // const test = localStorage.getItem(productToAdd)
  const itemsLocal = { ...localStorage };

  useEffect(() => {
    // console.log(itemsLocal, 'this is local items');
  }, [itemsLocal]);

  if (productToAdd){
    const test = localStorage.getItem(productToAdd.id)
    // console.log(JSON.parse(test), 'this is test')

  }
  // localStorage.clear();
  return (

    <AddSection>
      <AddButton>

      <CardImage
    url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
    onClick={() => setOutfitArray((initialArray) => [...outfitArray, productToAdd])}
    />

        {/* <CardImage
          url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
          onClick={() => AddToStorage(productToAdd)}
        /> */}

        <OutfitText>Add to Outfit</OutfitText>

      </AddButton>
      <AddedOutfit>

        {/* {itemsLocal ? itemsLocal.map((item, key) => <OutfitCard product={itemsLocal} key={key} />) : <OutfitCard product={itemsLocal} />} */}

        {/* {itemsLocal ? itemsLocal.map((item, key) => <OutfitCard product={itemsLocal} outfitArray={outfitArray} setOutfitArray={setOutfitArray} key={key} />) : <OutfitCard product={itemsLocal} outfitArray={outfitArray} setOutfitArray={setOutfitArray} />} */}

        {outfitArray.map((item, key) => <OutfitCard product={item} key={key} outfitArray={outfitArray} setOutfitArray={setOutfitArray} />)}
      </AddedOutfit>
    </AddSection>

  );
}

const CardImage = styled.div`
  width: 250px;
  height: 200px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;
const AddSection = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: row;
`;
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
const AddedOutfit = styled.div`
  margin-left: 15px;
`;

const AddButton = styled.div`
  // border-style
  border-radius: 5px;
  border-width: 2px;
  &:hover {
    box-shadow: 0 0 6px rgba(90, 90, 90, 0.8);
  }

`;
const OutfitText = styled.p`
  text-align: center;
`;



// <AddSection>
// <AddButton>

  // <CardImage
  //   url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
  //   onClick={() => setOutfitArray((initialArray) => [...outfitArray, productToAdd])}
//   />

//   <OutfitText>Add to Outfit</OutfitText>

// </AddButton>
// <AddedOutfit>


//   {outfitArray.map((item, key) => <OutfitCard product={item} key={key} outfitArray={outfitArray} setOutfitArray={setOutfitArray} />)}
// </AddedOutfit>
// </AddSection>