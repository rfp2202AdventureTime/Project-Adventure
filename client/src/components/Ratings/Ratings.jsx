import React, { useState } from 'react';
import styled from 'styled-components';
import { useMeta } from '../../contexts/ReviewMeta';
import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';
import Console from '../../Console';

export default function Ratings() {
  const unSorted = {
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
    filterCount: 0,
  };
  const currentMeta = useMeta();
  const [filterStatus, setFilterStatus] = useState(unSorted);

  const getFilterCount = (selected) => {
    const { filterCount } = filterStatus;
    return filterStatus[selected] ? (filterCount - 1) : (filterCount + 1);
  };

  const toggleFilter = (selected) => {
    const filterCount = getFilterCount(selected);
    setFilterStatus({
      ...filterStatus,
      filterCount,
      [selected]: !filterStatus[selected],
    });
  };

  const clearFilter = () => {
    setFilterStatus(unSorted);
  };

  return (
    <RatingSection>
      {currentMeta?.avgRating ? (
        <RatingBreakdown
          clearFilter={clearFilter}
          toggleFilter={toggleFilter}
          filterStatus={filterStatus}
        />
      ) : ''}
      <ReviewList filterStatus={filterStatus} />
    </RatingSection>
  );
}

// inherented theme
const RatingSection = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.secondary};
  @media (min-width: 768px)
  @media (max-width: 768px) { width: 100%; flex-wrap: wrap;}
  padding: 2rem 0rem 4rem 1rem;
`;
