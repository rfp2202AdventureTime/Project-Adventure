/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';
import { useCurrentStyles } from './CurrentStyles';

const ActiveStyleId = React.createContext();
const PreviewStyleId = React.createContext();

function getStyle(styles, id) {
  return styles.find((i) => i.style_id === id) || styles[0];
}

function useActiveStyle() {
  const [activeId, setActiveId] = React.useContext(ActiveStyleId);
  const currStyles = useCurrentStyles();

  const [activeStyle, setActiveStyle] = [getStyle(currStyles, activeId), setActiveId];
  return { activeStyle, setActiveStyle };
}

function usePreviewStyle() {
  const [previewId, setPreviewId] = React.useContext(PreviewStyleId);
  const currStyles = useCurrentStyles();

  const [previewStyle, setPreviewStyle] = [getStyle(currStyles, previewId), setPreviewId];
  return { previewStyle, setPreviewStyle };
}

function ActiveStyleProvider({ children }) {
  const currentStyles = useCurrentStyles();
  const [activeStyleId, setActiveStyleId] = React.useState();
  const [previewStyleId, setPreviewStyleId] = React.useState();

  React.useEffect(() => {
    if (currentStyles[0] && currentStyles[0].style_id) {
      setActiveStyleId(currentStyles[0].style_id);
    } else {
      setActiveStyleId(null);
    }
  }, [currentStyles]);

  React.useEffect(() => {
    setPreviewStyleId(activeStyleId);
  }, [activeStyleId]);

  return (
    <ActiveStyleId.Provider value={[activeStyleId, setActiveStyleId]}>
      <PreviewStyleId.Provider value={[previewStyleId, setPreviewStyleId]}>
        { children }
      </PreviewStyleId.Provider>
    </ActiveStyleId.Provider>
  );
}

ActiveStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useActiveStyle, ActiveStyleProvider, usePreviewStyle };
