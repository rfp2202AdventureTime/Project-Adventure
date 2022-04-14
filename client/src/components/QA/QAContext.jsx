import React, {
  useContext, useState, useEffect,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useCurrentProductId } from '../../contexts/ProductIDContext';

const QAContext = React.createContext('Loading');

export function useData() {
  return useContext(QAContext);
}

export function QADataProvider({ children }) {
  const [qData, setQData] = useState(null);
  const [aData, setAData] = useState([]);
  const { currentProductId } = useCurrentProductId();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/qa/questions',
      params: {
        product_id: currentProductId,
        count: 100,
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
              // eslint-disable-next-line no-shadow
              setAData((aData) => [...aData, data]);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductId]);
  // const allQAData = useMemo(() => ({}))
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QAContext.Provider value={{
      qData,
      aData,
      setQData,
      setAData,
    }}
    >
      { children }
    </QAContext.Provider>
  );
}

QADataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
