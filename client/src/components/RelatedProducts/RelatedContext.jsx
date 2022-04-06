import React, {
  useState, useEffect, useContext, createContext, useMemo,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from '../../contexts/ProductIDContext';

const RelatedContext = createContext();

export function useRelated() {
  return useContext(RelatedContext);
}

export function RelatedProvider({ children }) {
  const [productInfo, setProductInfo] = useState();
  const [thumbnail, setThumbnail] = useState();
  const productId = useContext(ProductIDContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/products/${productId}`,
    })
      .then(({ data }) => {
        setProductInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/products/${productId}/related`,
    })
      .then(({ data }) => {
        setThumbnail(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RelatedContext.Provider value={productInfo}>
      { children }
    </RelatedContext.Provider>
  );
}

RelatedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
