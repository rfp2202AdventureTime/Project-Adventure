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
  const [qData, setQData] = useState(null);
  const [aData, setAData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/qa/questions',
      params: {
        product_id: productId,
      },
    })
      .then(({ data }) => {
        setQData(data.results);
        data.results.forEach((question) => {
          axios({
            method: 'get',
            url: `http://localhost:3000/qa/questions/${question.question_id}/answers`,
          })
            // eslint-disable-next-line no-shadow
            .then(({ data }) => {
              setAData(aData.push(data));
              console.log(aData);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return (
    <QAContext.Provider value={qData}>
      { children }
    </QAContext.Provider>
  );
}

QADataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
