import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Overview from './components/Overview/Overview';
import QA from './components/QA/QA';
import Ratings from './components/Ratings/Ratings';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';

const Title = styled.h1`
  font-size: 3em;
`;

function App() {
  return (
    <>
      <Title>
        Adventure Time
      </Title>
      <Overview />
      <RelatedProducts />
      <QA />
      <Ratings />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
