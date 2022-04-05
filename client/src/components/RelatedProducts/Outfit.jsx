import React from 'react';
import styled from 'styled-components';

const AddOutfit = styled.div`
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  margin-right: 7px;
  margin-bottom: 2px;
  border-radius: 5px;
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

function Outfit() {
  return (
    <AddOutfit>
      <img
        src={'https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg'}
        alt="plus sign"
        width={200}
        height={200}
        onClick={() => clickCheck()}
      />

      <OutfitText>Add to Outfit</OutfitText>
    </AddOutfit>

  );
}

export default Outfit;
