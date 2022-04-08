import {
  React, useContext, useState, useEffect, createContext,
} from 'react';
import axios from 'axios';
import { useRelated, RelatedProvider, RelatedContext } from '../RelatedContext';

const TestContext = createContext();

export function useTest() {
  return useContext(TestContext);
}
export function TestProvider({ children }) {
  const related = useRelated();

  const [relatedInformation, setRelatedInformation] = useState();

  // console.log(related, 'this is useRelated');

  useEffect(() => {
    if (!related) {
      console.log('loading information');
    } else {
      related.map((number) => axios({
        method: 'get',
        url: `products/${number}`,
      })
        .then(({ data }) => {
          setRelatedInformation(data);
        })
        .catch((err) => console.log('there was an ERROR')));
    }
  }, [related]);

  return (
    <TestContext.Provider value={relatedInformation}>
      { children }
    </TestContext.Provider>
  );
}

export default TestContext;
