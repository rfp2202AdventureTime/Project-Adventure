import React, { useContext } from 'react';
import styled from 'styled-components';

import QAItem from './QAItem';
import QAContext from './QAContext';

export default function Feed() {
  // filter passed down context of questions
  // base on product_id
  // let productQAList = xxx.filter((question) => { question.product_id === productID })
  const dataOne = useContext(QAContext);
  return (
    <FeedSection>
      {dataOne}
      {/* map every question an QA item */}
      <QAItem />
    </FeedSection>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;
