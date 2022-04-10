import {
  React, useState, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import { ProductIDContext, useCurrentProduct } from '../../../contexts/ProductIDContext';

import OutfitCard from './OutfitCard';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

export default function Outfit() {
  const productToAdd = useCurrentProduct().currentProduct;
  const initialArray = [];
  const [outfitArray, setOutfitArray] = useState(initialArray);

  // useEffect(() => {
  //   console.log(outfitArray);
  // }, [outfitArray]);

  return (

    <AddSection>
      <div>

        <img
          src="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
          alt="plus sign"
          width={280}
          height={250}
          onClick={() => setOutfitArray((initialArray) => [...initialArray, productToAdd])}
          />

        <OutfitText>Add to Outfit</OutfitText>





          </div>
        <AddedOutfit>

        {outfitArray.map((item, key) => <OutfitCard product={item} key={key} />)}
        </AddedOutfit>
    </AddSection>




  // {/* <OutfitCard product={outfitArray} /> */}


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
  margin-bottom: 5px;
  border-radius: 5px;
  justify-content: space-evenly;
  // &:hover {
  //   box-shadow: 0 8px 16px 0;
  // }
`;

const OutfitText = styled.p`
  text-align: center;
`;

// export {

// };


{/* <div onClick={() => setOutfitArray((initialArray) => [...initialArray, productToAdd])}></div> */}

// const AddSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   float: float;
//   border-style: solid;
//   border-width: 2px;
//   width: fit-content;
//   margin-right: 30px;
//   margin-bottom: 5px;
//   border-radius: 5px;
//   justify-content: space-evenly;
//   &:hover {
//     box-shadow: 0 8px 16px 0;
//   }
// `;