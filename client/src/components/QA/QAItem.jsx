import React from 'react';
import styled from 'styled-components';

export default function QAItem() {
  <QAItemSection>
    Here is one question and answer
  </QAItemSection>;
}

const QAItemSection = styled.section`
  background-color: ${(props) => props.theme.color.light}
`;
