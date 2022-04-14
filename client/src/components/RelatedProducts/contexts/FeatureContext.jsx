/* eslint-disable react/prop-types */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import Console from '../../../Console';
import { useCurrentProductId } from '../../../contexts/ProductIDContext';

const FeatureContext = createContext();

export function useFeature() {
  return useContext(FeatureContext);
}

export function FeatureProvider({ children, prodID }) {
  const [featuresInfo, setFeatures] = useState();
  const { currentProductId } = useCurrentProductId();
  const twoProducts = [currentProductId, prodID];

  useEffect(() => {
    if (prodID && currentProductId) {
      Promise.all(twoProducts.map((number) => axios({
        method: 'get',
        url: `products/${number}`,
      })))
        .then((data) => {
          setFeatures({ data });
        })
        .catch((err) => Console.log('ERROR in FeatureContext', err));
    }
  }, [prodID]);

  return (
    <FeatureContext.Provider value={featuresInfo}>
      { children }
    </FeatureContext.Provider>
  );
}
