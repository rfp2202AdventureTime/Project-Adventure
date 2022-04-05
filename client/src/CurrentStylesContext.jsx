import { createContext } from 'react';

// Currently using dummy data.
import styleData from './components/Overview/StyleSelectorData';

const CurrentStyles = createContext(styleData[0].results);
const ActiveStyleId = createContext();

export { CurrentStyles, ActiveStyleId };
