import React, {
  useContext, useState, useEffect,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const QAContext = React.createContext('Loading');

export function useData() {
  return useContext(QAContext);
}

export function QADataProvider({ children }) {
  const [qaData, setQAData] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/qa/questions',
      params: {
        // harded coded for now but will use context product ID
        product_id: '65634',
      },
    })
      .then(({ data }) => {
        // console.log(data);
        setQAData(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <QAContext.Provider value={qaData}>
      { children }
    </QAContext.Provider>
  );
}

QADataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
