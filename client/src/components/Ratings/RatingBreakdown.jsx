import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RatingOverview from './RatingBreakdown/RatingOverview';
import RatingList from './RatingBreakdown/RatingList';
import FactorList from './RatingBreakdown/FactorList';

export default function RatingBreakdown({ toggleFilter }) {
  return (
    <RatingContainer>
      <RatingOverview />
      <RatingList toggleFilter={toggleFilter} />
      <FactorList />
    </RatingContainer>
  );
}

// style components
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

RatingBreakdown.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
};
