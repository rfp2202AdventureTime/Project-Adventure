import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#525252',
    secondary: '#5a5a5a',
    background: '#ebebeb',
    light: '#ffffff',
    offWhite: '#FAF9F6',
    modalBackground: 'rgba(0,0,0,0.8)',
    tertiary: '#e6ebea',
  },
  fonts: {
    title: {
      transform: 'none',
    },
    heading: {
      transform: 'uppercase',
    },
  },
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
