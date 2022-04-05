import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ActiveStyleId } from './ActiveStyleId';

export const PreviewStyleId = createContext([undefined, undefined]);

export function PreviewStyleProvider({ children }) {
  const [activeStyleId] = useContext(ActiveStyleId);
  const [previewStyleId, setPreviewStyleId] = useState();

  useEffect(() => {
    setPreviewStyleId(activeStyleId);
  }, [activeStyleId]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PreviewStyleId.Provider value={[previewStyleId, setPreviewStyleId]}>
      { children }
    </PreviewStyleId.Provider>
  );
}

PreviewStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
