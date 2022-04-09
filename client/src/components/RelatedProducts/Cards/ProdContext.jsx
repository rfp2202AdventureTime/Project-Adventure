import {
  React, useContext, useState, useEffect, createContext,
} from 'react';
import axios from 'axios';
import { useRelated } from '../RelatedContext';

const ProdContext = createContext();

export function useProd() {
  return useContext(ProdContext);
}
export function ProdProvider({ children }) {
  const related = useRelated();

  const [relatedInformation, setRelatedInformation] = useState([]);

  useEffect(() => {
    if (!related) {
      console.log('loading information');
    } else {
      Promise.all(related.map((number) => axios({
        method: 'get',
        url: `products/${number}`,
      })))
        .then((data) => {
          setRelatedInformation({ data });
        })
        .catch((err) => console.log('there was an ERROR', err));
    }
  }, [related]);

  return (
    <ProdContext.Provider value={relatedInformation}>
      { children }
    </ProdContext.Provider>
  );
}

export default ProdContext;
