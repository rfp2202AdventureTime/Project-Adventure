import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ProductIDContext } from './ProductIDContext';

const CurrentStyles = createContext([undefined, undefined]);

export function CurrentStylesProvider({ children }) {
  const [currentStyles, setCurrentStyles] = useState([]);
  const productId = useContext(ProductIDContext);

  // Fetch new styles whenever the productId changes
  useEffect(() => {
    axios({ method: 'get', url: `/products/${productId}/styles` })
      .then(({ data }) => { setCurrentStyles(data.results); })
      .catch(() => setCurrentStyles([]));
  }, [productId]);

  return (

    <CurrentStyles.Provider value={currentStyles}>
      { children }
    </CurrentStyles.Provider>
  );
}

CurrentStylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CurrentStyles };
