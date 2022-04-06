import React, { useState } from 'react';
import styled from 'styled-components';

import Search from './QASearch';
import QAFeed from './QAFeed';
import { QADataProvider } from './QAContext';

export default function QA() {
  const [searchQuesitonBody, setSearchQuestionBody] = useState('');
  const [submitSearchQuestionBody, setsubmitSearchQuestionBody] = useState('');

  return (
    <QASection>
      <QADataProvider>
        <>
          <h1>Questions and Answers</h1>
          <Search
            searchQuesitonBody={searchQuesitonBody}
            setSearchQuestionBody={setSearchQuestionBody}
            submitSearchQuestionBody={submitSearchQuestionBody}
            setsubmitSearchQuestionBody={setsubmitSearchQuestionBody}
          />
          <QAFeed submitSearchQuestionBody={submitSearchQuestionBody} />
        </>
      </QADataProvider>
    </QASection>
  );
}

const QASection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
