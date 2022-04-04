import React from 'react';

// Currently using dummy data.
import styleData from './components/Overview/StyleSelectorData';

const CurrentStyles = React.createContext(styleData[0].results);
const ActiveStyle = React.createContext(styleData[0].results[0].style_id);

export { CurrentStyles, ActiveStyle };
