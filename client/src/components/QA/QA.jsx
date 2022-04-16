import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const Search = lazy(() => import('./QASearch'));
const QAFeed = lazy(() => import('./QAFeed'));
import { QADataProvider } from './QAContext';

export default function QA() {
  const [searchQuesitonBody, setSearchQuestionBody] = useState('');
  const [submitSearchQuestionBody, setsubmitSearchQuestionBody] = useState('');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QASection>
        <QADataProvider>
          <>
            <QAHeading>QUESTIONS AND ANSWERS</QAHeading>
            <Search
              searchQuesitonBody={searchQuesitonBody}
              setSearchQuestionBody={setSearchQuestionBody}
              submitSearchQuestionBody={submitSearchQuestionBody}
              setsubmitSearchQuestionBody={setsubmitSearchQuestionBody}
            />
            <QAFeed
              searchQuesitonBody={searchQuesitonBody}
              submitSearchQuestionBody={submitSearchQuestionBody}
            />
          </>
        </QADataProvider>
      </QASection>
    </Suspense>
  );
}

const QAHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.title.family};
  color: ${(props) => props.theme.colors.primary};
  padding-bottom: 10px;
`;

const QASection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.primary};
  padding-left: 2rem;
  padding-top: 3rem;
`;
