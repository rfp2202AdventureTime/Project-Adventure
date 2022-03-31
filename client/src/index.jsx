import React from 'react';
import ReactDOM from 'react-dom';

import Overview from './components/Overview/Overview.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
`;

const App = () => {
  return (
    <>
      <Title >
        Adventure Time
      </Title>
      <Overview />
      <RelatedProducts />
      <QA />
      <Ratings />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));