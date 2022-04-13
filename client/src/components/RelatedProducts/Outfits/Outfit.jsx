import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useCurrentProduct, useCurrentProductId } from '../../../contexts/ProductIDContext';
import { useCurrentStyles } from '../../../contexts/StylesProvider';


import OutfitCard from './OutfitCard';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

// change image to cover
export default function Outfit() {
  const { currentProductId } = useCurrentProductId();

  if (useCurrentStyles() && currentProductId) {
    const currentThumbnail = useCurrentStyles()[0]?.photos[0].thumbnail_url
    const [outfitThumbnail, setOutfitThumbnail] = useState(currentThumbnail);



    const AddToStorage = (product) => {
      // console.log(product, 'product');

      axios({
        method: 'GET',
        url: `/products/${product}`,
      })
        .then(({ data }) => {
          let dataTest = [data, currentThumbnail]
          localStorage.setItem(data.id, JSON.stringify(dataTest));
        });
    };


    const itemsLocal = { ...localStorage };
    const keys = Object.keys(itemsLocal);
    const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));
    const [outfitArray, setOutfitArray] = useState((outfitArray) => [...testingArray]);

    // used only for testing REMOVE
    useEffect(() => {
      console.log(outfitArray, 'local');
      const itemsLocal = { ...localStorage };
      const keys = Object.keys(itemsLocal);
      const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));
    }, [itemsLocal]);

    // localStorage.clear();
    return (

      <AddSection>
        <AddButton>

          <CardImage
            url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
            onClick={() => AddToStorage(currentProductId)}
          />

          <OutfitText>Add to Outfit</OutfitText>

        </AddButton>
        <AddedOutfit>

          {/* {outfitArray ? outfitArray.map((item, key) => <OutfitCard product={item[0]} image={item[1]} key={key} />) : null } */}
          {outfitArray.map((item, key) => <OutfitCard product={item[0]} image={item[1]} key={key} />)}

        </AddedOutfit>
      </AddSection>

    );
  }
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

/* <CardImage
    url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
    onClick={() => setOutfitArray(([]) => [...outfitArray, productToAdd])}
    /> */

