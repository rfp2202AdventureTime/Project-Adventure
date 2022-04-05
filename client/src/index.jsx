import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Theme from './Theme';
import Overview from './components/Overview/Overview';
import QA from './components/QA/QA';
import Ratings from './components/Ratings/Ratings';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import { ProductIDContext } from './ProductIDContext';
import { CurrentStylesProvider } from './contexts/CurrentStyles';

function App() {
  const defaultProductId = 65633;

  return (
    <Theme>
      <ProductIDContext.Provider value={defaultProductId}>
        <SiteHeader>
          Adventure Time
          <SiteSearch>
            ________
          </SiteSearch>
        </SiteHeader>

        <Banner>
          SITE-WIDE ANNOUNCEMENT MESSAGE - SALE / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
        </Banner>

        <CurrentStylesProvider>
          <Overview />
          <RelatedProducts />
        </CurrentStylesProvider>
        <QA />
        <Ratings />
      </ProductIDContext.Provider>
    </Theme>
  );
}

const SiteHeader = styled.header`
  font-size: 2em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
  font-style: italic;
  padding: 20px 40px;
`;

const SiteSearch = styled.span`
  float: right;
`;

const Banner = styled.div`
  backgound-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9em;
  text-align: center;
  padding: 10px 0;
`;

ReactDOM.render(<App />, document.getElementById('root'));
