import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useData } from './QAContext';
import { QAItem } from './QAItem';
import { Button } from '../../contexts/Shared.styled';
import NewForm from '../../contexts/NewForm';
import { useCurrentProduct } from '../../contexts/ProductIDContext';
import useTracking from '@Contexts/ClickTracker';

export default function Feed({ searchQuesitonBody }) {
  const [numQsToRender, setNumQsToRender] = useState(2);
  const [startQsToRender, setStartQsToRender] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { currentProduct } = useCurrentProduct();
  const { trackEvent } = useTracking({widget: 'QAfeed'});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const questionData = useData().qData;
  const answerData = useData().aData;
  let filteredQData = questionData;
  let queryText = '';
  if (searchQuesitonBody !== undefined && searchQuesitonBody.length > 2) {
    queryText = searchQuesitonBody.toLowerCase();
  } else {
    queryText = '';
  }
  const tempTotalQsToRender = [];
  let lengthOfFeed = 0;

  if (questionData !== null) {
    lengthOfFeed = questionData.length;
    filteredQData = questionData.filter(
      (question) => question.question_body.toLowerCase().includes(queryText),
    );
    const compareQuestionHelpfulness = (a, b) => {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      } if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      } return 0;
    };
    filteredQData.sort(compareQuestionHelpfulness);
    for (let i = 0; i < Math.min(numQsToRender, filteredQData.length); i += 1) {
      tempTotalQsToRender.push(filteredQData[i]);
    }
  }

  return (
    <>
      <FeedSection>
        {tempTotalQsToRender === [] ? 'Loading...' : tempTotalQsToRender.map(
          (question) => (
            <QAItem
              key={question.question_id}
              question={question}
              allAnswers={answerData}
            />
          ),
        )}
      </FeedSection>
      <ButtonBlock>
        {(lengthOfFeed > numQsToRender) && (
          <Button
            type="submit"
            onClick={() => {
              setNumQsToRender(numQsToRender + 2);
              setStartQsToRender(startQsToRender + 2);
              trackEvent({element: 'load_more_questions_button'})
            }}
          >
            Load More Questions
          </Button>
        )}
        <Button onClick={() => {
          toggleModal();
          trackEvent({element: 'ask_questions_button'})
          }}> Ask a Question +</Button>
        <NewForm
          formtype="qa/questions/"
          productName={currentProduct?.name}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </ButtonBlock>
    </>
  );
}

const FeedSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  max-height: 550px;
  overflow: auto;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1.3rem 1rem 1.3rem 1rem;
`;

Feed.propTypes = {
  searchQuesitonBody: PropTypes.string,
};

Feed.defaultProps = {
  searchQuesitonBody: '',
};
