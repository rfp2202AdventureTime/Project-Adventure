import React from 'react';
import styled from 'styled-components';
// import IndCard from './Individualcard';

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

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list
let outfitList = 0;

function clickCheck(e) {
  outfitList += 1;
  console.log(outfitList, 'this is outfitlist');
}

export default function Outfit() {
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

export {
  AddOutfit,
};
