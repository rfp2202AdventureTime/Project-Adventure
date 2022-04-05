import React from 'react';
import styled from 'styled-components';

import { useData } from './QAContext';
import QAItem from './QAItem';

export default function Feed() {
  const fullQAData = useData();
  // filter passed down context of questions
  // base on product_id
  // let productQAList = xxx.filter((question) => { question.product_id === productID })
  return (
    <FeedSection>
      <h1>Feed</h1>
      <ul>
        {fullQAData === null ? 'Loading...' : fullQAData.map((question) => <QAItem question={question} key={question.question_id} />)}
      </ul>
    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;
