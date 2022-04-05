import React from 'react';
import styled from 'styled-components';

import { useData } from './QAContext';
import QAItem from './QAItem';

export default function Feed() {
  const fullQAData = useData();
  console.log(fullQAData);
  // filter passed down context of questions
  // base on product_id
  // let productQAList = xxx.filter((question) => { question.product_id === productID })
  return (
    <FeedSection>
      {/* map every question an QA item */}
      <h1>Feed</h1>
      <p>{fullQAData === null ? 'loading' : fullQAData[0].question_id}</p>
      <QAItem />
    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;
