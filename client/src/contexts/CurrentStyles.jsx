import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ProductIDContext } from './ProductIDContext';

const CurrentStyles = React.createContext([undefined, undefined]);

function useCurrentStyles() {
  return React.useContext(CurrentStyles);
}

function CurrentStylesProvider({ children }) {
  const [currentStyles, setCurrentStyles] = React.useState([]);
  const productId = React.useContext(ProductIDContext);

  // Fetch new styles whenever the productId changes
  React.useEffect(() => {
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

export { CurrentStylesProvider, useCurrentStyles };
