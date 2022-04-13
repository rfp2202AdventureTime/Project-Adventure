/* eslint-disable react/prop-types */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import Console from '../../../Console';
import { ProductIDContext, useCurrentProductId } from '../../../contexts/ProductIDContext';

const FeatureContext = createContext();

export function useFeature() {
  return useContext(FeatureContext);
}
// fix current productIDContext to use currentProductID
export function FeatureProvider({ children, prodID }) {
  const [featuresInfo, setFeatures] = useState();
  // const productId = useCurrentProductId().currentProductId;
  const productId = useContext(ProductIDContext);
  const twoProducts = [productId, prodID];

  useEffect(() => {
    if (prodID) {
      Promise.all(twoProducts.map((number) => axios({
        method: 'get',
        url: `products/${number}`,
      })))
        .then((data) => {
          setFeatures({ data });
        })
        .catch((err) => Console.log(err));
    }
  }, [prodID]);

  return (
    <FeatureContext.Provider value={featuresInfo}>
      { children }
    </FeatureContext.Provider>
  );
}
