import React from 'react';
import { render } from 'react-dom';
import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

const App = () => {
  return (
    <>
    <h1>hello world</h1>
    <Overview />
    <RelatedProducts />
    <QA />
    <Ratings />
    </>
  );
};

render(<App />, document.getElementById('root'));