import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { CurrentStyles } from './CurrentStyles';

const ActiveStyleId = createContext([undefined, undefined]);

export function ActiveStyleProvider({ children }) {
  const [currentStyles] = useContext(CurrentStyles);
  const [activeStyleId, setActiveStyleId] = useState();

  useEffect(() => {
    if (currentStyles[0] && currentStyles[0].style_id) {
      setActiveStyleId(currentStyles[0].style_id);
    } else {
      setActiveStyleId(null);
    }
  }, [currentStyles]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ActiveStyleId.Provider value={[activeStyleId, setActiveStyleId]}>
      { children }
    </ActiveStyleId.Provider>
  );
}

ActiveStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ActiveStyleId };
