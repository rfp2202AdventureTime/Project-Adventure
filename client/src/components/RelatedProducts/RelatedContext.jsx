import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from '../../ProductIDContext';

const RelatedContext = React.createContext();
RelatedContext.displayName = 'RelatedData';

export function useMeta() {
  return useContext(RelatedContext);
}

export function RelatedProvider({ children }) {
  const productId = useContext(ProductIDContext);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products',
      params: {
        product_id: productId,
      },
    })
      .then(({ data }) => {
        setProductInfo(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <RelatedContext.Provider value={productInfo}>
      { children }
    </RelatedContext.Provider>
  );
}

RelatedProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
