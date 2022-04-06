import React, {
  useContext, useState, useEffect,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductIDContext } from '../../contexts/ProductIDContext';

const QAContext = React.createContext('Loading');

export function useData() {
  return useContext(QAContext);
}

export function QADataProvider({ children }) {
  const productId = useContext(ProductIDContext);
  const [qaData, setQAData] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/qa/questions',
      params: {
        product_id: productId,
      },
    })
      .then(({ data }) => {
        setQAData(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return (
    <QAContext.Provider value={qaData}>
      { children }
    </QAContext.Provider>
  );
}

QADataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
