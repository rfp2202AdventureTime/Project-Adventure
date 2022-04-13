import { React, useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
import { useCurrentProduct, useCurrentProductId } from '../../../contexts/ProductIDContext';
import { useCurrentStyles } from '../../../contexts/StylesProvider';
import CarouselRelated from './CarouselOutfit';

// to check functionality of 'add to outfit'
// will need to add current product to 'Your Outfit' list

// change image to cover
export default function Outfit() {
  const { currentProductId } = useCurrentProductId();

  if (useCurrentStyles() && currentProductId) {
    const [outfitArray, setOutfitArray] = useState([]);

    const itemsLocal = { ...localStorage };
    const keys = Object.keys(itemsLocal);
    const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));

    useEffect(() => {
      setOutfitArray(([]) => [...testingArray]);
    }, [itemsLocal]);

    // localStorage.clear();
    return (

      <CarouselRelated zippedArray={outfitArray} />

    );
  }
}
