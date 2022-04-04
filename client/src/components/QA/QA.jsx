import React from 'react';
import styled from 'styled-components';

import Search from './QASearch';

function QA() {
  return (
    <QASection>
      <h1>Questions and Answers</h1>
      <Search />
    </QASection>
  );
}

const QASection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

export default QA;
