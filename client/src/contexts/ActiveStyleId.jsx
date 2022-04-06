import React from 'react';
import PropTypes from 'prop-types';
import { CurrentStyles } from './CurrentStyles';

const ActiveStyleId = React.createContext([undefined, undefined]);

function ActiveStyleProvider({ children }) {
  const currentStyles = React.useContext(CurrentStyles);
  const [activeStyleId, setActiveStyleId] = React.useState();

  // When the current styles change, reset the active style id.
  React.useEffect(() => {
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

function useActiveStyleId() {
  const [activeStyleId, setActiveStyleId] = React.useContext(ActiveStyleId);
  return { activeStyleId, setActiveStyleId };
}

function useActiveStyle() {
  const getStyle = (currentStyles, styleId) => {
    let style = currentStyles[0];
    for (let i = 0; i < currentStyles.length; i += 1) {
      if (currentStyles[i].style_id === styleId) {
        style = currentStyles[i];
      }
    }
    return style;
  };
  const [activeStyleId, setActiveStyleId] = React.useContext(ActiveStyleId);
  const currentStyles = React.useContext(CurrentStyles);

  const [activeStyle, setActiveStyle] = [getStyle(currentStyles, activeStyleId), setActiveStyleId];
  return { activeStyle, setActiveStyle };
}

ActiveStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Eventually we want to deprecate ActiveStyleId in favor of useActiveStyleId.
export {
  useActiveStyle,
  useActiveStyleId,
  ActiveStyleProvider,
  ActiveStyleId,
};
