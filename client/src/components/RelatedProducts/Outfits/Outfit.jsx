import { React, useState, useContext } from 'react';
import styled from 'styled-components';
import { ProductIDContext, useCurrentProduct } from '../../../contexts/ProductIDContext';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

export default function Outfit() {

  const productToAdd = useCurrentProduct().currentProduct;
  // console.log(productToAdd, 'add me')
  const [currentProd, setCurrentProd] = useState();


  function clickCheck(e) {
   setCurrentProd(productToAdd);
   if (currentProd){
     console.log(currentProd, 'currentProd')

   }
  }
  return (
    <AddOutfit>
      <div onClick={() => clickCheck()}>
        <img
          src="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
          alt="plus sign"
          width={280}
          height={250}
        />

      </div>

      <OutfitText>Add to Outfit</OutfitText>
    </AddOutfit>

  );
}

const AddOutfit = styled.div`
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  justify-content: space-evenly;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;

const OutfitText = styled.p`
  text-align: center;
`;

export {
  AddOutfit,
};
