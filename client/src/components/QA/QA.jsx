import React from 'react';
import styled from 'styled-components';

function QA() {
  return (
    <QASection>
      <h1>Questions and Answers</h1>
    </QASection>
  );
}

const QASection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

export default QA;
