import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { ProductIDContext } from '../../../contexts/ProductIDContext';

const FeatureContext = createContext();

export function useFeature() {
  return useContext(FeatureContext);
}

export function FeatureProvider({ children, prodID }) {
  const [featuresInfo, setFeatures] = useState();

  const productId = useContext(ProductIDContext);
  const twoProducts = [productId, prodID];

  useEffect(() => {
    if (prodID) {
      Promise.all(twoProducts.map((number) => axios({
        method: 'get',
        url: `products/${number}`,
      })))
        .then((data) => {
          // console.log({ data }, 'this DATA')
          setFeatures({ data });
        })
        .catch((err) => console.log(err));
    }
  }, [prodID]);

  return (
    <FeatureContext.Provider value={featuresInfo}>
      { children }
    </FeatureContext.Provider>
  );
}

// RelatedProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
