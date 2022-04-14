import { React, useState, useEffect } from 'react';
// import styled from 'styled-components';
import CarouselAddToOutfit from './CarouselOutfit';

// setsOutfitArray state to localStorage
export default function Outfit() {
  const [outfitArray, setOutfitArray] = useState([]);

  const itemsLocal = { ...localStorage };
  const keys = Object.keys(itemsLocal);
  const localArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));

  useEffect(() => {
    setOutfitArray(([]) => [...localArray]);
  }, [itemsLocal]);

  return (
    <CarouselAddToOutfit informationArray={outfitArray} />

  );
  // }
}
