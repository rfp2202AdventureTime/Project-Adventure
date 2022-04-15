import { React, useState, useEffect } from 'react';
import CarouselAddToOutfit from './CarouselOutfit';

// setsOutfitArray state to localStorage
export default function Outfit() {
  const [outfitArray, setOutfitArray] = useState([]);

  const itemsLocal = { ...localStorage };
  // const localArray = Object.keys(itemsLocal).map((item) => JSON.parse(localStorage.getItem(item)));
  const localArray = [];
  Object.keys(itemsLocal).forEach((item) => {
    if (item !== 'theme') {
      localArray.push(JSON.parse(localStorage.getItem(item)));
    }
  });

  useEffect(() => {
    setOutfitArray(([]) => [...localArray]);
  }, [itemsLocal]);

  return (
    <CarouselAddToOutfit informationArray={outfitArray} />

  );
}
