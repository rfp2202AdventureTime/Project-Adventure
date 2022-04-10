import React, { useState } from 'react';
import styled from 'styled-components';
import { useMeta } from '../../contexts/ReviewMeta';
import RatingBreakdown from './RatingBreakdown';
import ReviewList from './ReviewList';
import Console from '../../Console';

export default function Ratings() {
  const currentMeta = useMeta();
  const [filterStatus, setFilterStatus] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
    filterCount: 0,
  });

  const getfilterCount = (selected) => {
    let { filterCount } = filterStatus;
    if (filterStatus[selected]) {
      filterCount -= 1;
    } else {
      filterCount += 1;
    }
    return filterCount;
  };

  const toggleFilter = (selected) => {
    const filterCount = getfilterCount(selected);
    setFilterStatus({
      ...filterStatus,
      filterCount,
      [selected]: !filterStatus[selected],
    });
  };

  const clearFilter = () => {
    setFilterStatus({
      5: false,
      4: false,
      3: false,
      2: false,
      1: false,
      filterCount: 0,
    });
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
  padding: 2rem 0rem 4rem 1rem;
  color: ${({ theme }) => theme.colors.secondary};

`;
