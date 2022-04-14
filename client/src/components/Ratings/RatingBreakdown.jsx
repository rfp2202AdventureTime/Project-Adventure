import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingOverview = lazy(() => import('./RatingBreakdown/RatingOverview')) ;
const RatingList = lazy(() => import('./RatingBreakdown/RatingList')) ;
const FactorList = lazy(() => import('./RatingBreakdown/FactorList')) ;

// eslint-disable-next-line react/prop-types
export default function RatingBreakdown({ toggleFilter, filterStatus, clearFilter }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RatingContainer>
        <RatingOverview />
        <RatingList
          filterStatus={filterStatus}
          toggleFilter={toggleFilter}
          clearFilter={clearFilter}
        />
        <FactorList />
      </RatingContainer>
    </Suspense>
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
