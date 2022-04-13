/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { React } from 'react';
import styled from 'styled-components';
import { useMeta } from '../../../contexts/ReviewMeta';
import { Individualcard } from '../Cards/Individualcard';
// import { useThumbnail } from '../Cards/thumbnailContext';

// ({ product, setOutfitArray, outfitArray })

function OutfitCard({ product, image }) {

  const thumbnail = image;
  const rating = useMeta();
  const information = [product, thumbnail, rating, false];

  return (

    <Outfit>

      {/* <CloseButton onClick={console.log(product)}>
      //   X
      // </CloseButton> */}

      <Individualcard product={information} />
    </Outfit>

  );
}

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
`;

const CloseButton = styled.button`
  display: relative;
  position: absolute;
  top: 5px;
  right: 15px;
  background: transparent;
  border-style: transparent;
  font-color: red;
`;

const Outfit = styled.div`
  // margin-left: 5px;
  display: flex;
  float: right;
  flex-direction: row;

`;
export default OutfitCard;
