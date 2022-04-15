import { React, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled, { ThemeProvider } from 'styled-components';

import { FiSun, FiMoon } from 'react-icons/fi';

import { StylesProvider } from '@Contexts/StylesProvider';
import { ProductProvider } from '@Contexts/ProductIDContext';
import { RatingProvider } from './contexts/ReviewMeta';

import themes from './contexts/Theme';
import Overview from './components/Overview';
import QA from './components/QA/QA';
import Ratings from './components/Ratings/Ratings';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';

function App() {
  const defaultProductId = 65631;
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <ProductProvider productId={defaultProductId}>
        <Site>
          <SiteHeader>
            Adventure Time
            <SiteSearch>
              <ThemeChanger onClick={() => handleThemeChange()}>
                {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeChanger>
            </SiteSearch>
          </SiteHeader>
          <Banner>
            SITE-WIDE ANNOUNCEMENT MESSAGE - SALE / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
          </Banner>
          <SiteBody>
            <RatingProvider>
              <StylesProvider>
                <Overview />
                <RelatedProducts />
              </StylesProvider>
              <QA />
              <Ratings />
            </RatingProvider>
          </SiteBody>
        </Site>
      </ProductProvider>
    </ThemeProvider>
  );
}

const Site = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  height: 100%;
`;

const SiteHeader = styled.header`
  font-size: 2em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
  font-style: italic;
  padding: 20px 40px;
`;

const SiteBody = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const ThemeChanger = styled.span`
  cursor: pointer;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

createRoot(document.getElementById('root')).render(<App />);
