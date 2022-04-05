import React from 'react';
import styled from 'styled-components';

import Search from './QASearch';
import QAFeed from './QAFeed';
import { QADataProvider } from './QAContext';

export default function QA() {
  // const qaData = useContext(QAContext);
  return (
    <QASection>
      <QADataProvider>
        <>
          <h1>Questions and Answers</h1>
          <Search />
          <QAFeed />
        </>
      </QADataProvider>
    </QASection>
  );
}

const QASection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;
