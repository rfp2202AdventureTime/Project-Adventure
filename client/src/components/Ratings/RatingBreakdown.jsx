import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RatingOverview from './RatingBreakdown/RatingOverview';
import RatingList from './RatingBreakdown/RatingList';
import FactorList from './RatingBreakdown/FactorList';

// eslint-disable-next-line react/prop-types
export default function RatingBreakdown({ toggleFilter, filterStatus, clearFilter }) {
  return (
    <RatingContainer>
      <RatingOverview />
      <RatingList
        filterStatus={filterStatus}
        toggleFilter={toggleFilter}
        clearFilter={clearFilter}
      />
      <FactorList />
    </RatingContainer>
  );
}

// style components
const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: figure out nested proptype
RatingBreakdown.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
};
