/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useMeta } from '../../../contexts/ReviewMeta';
import RatingBar from './RatingBar';

export default function RatingList({ toggleFilter, filterStatus, clearFilter }) {
  const starList = [];
  const [activeTags, setActiveTags] = useState({
    tags: [],
    filterOn: false,
  });

  const currentMeta = useMeta();
  if (currentMeta) {
    const { ratings, totalCT } = currentMeta;
    const starArray = [5, 4, 3, 2, 1];

    starArray.forEach((key) => {
      const currentCT = Number(ratings[key]);
      if (Number.isNaN(currentCT)) {
        starList.push({ id: key, decimal: 0 });
      } else {
        starList.push({ id: key, decimal: currentCT / totalCT });
      }
    });
  }
  const removeAllFilter = (() => {
    clearFilter();
  });

  useEffect(() => {
    const tags = [];
    if (filterStatus.filterCount) {
      Object.keys(filterStatus).forEach((key) => {
        if (key !== 'filterCount') {
          // eslint-disable-next-line no-unused-expressions
          filterStatus[key] && tags.push(`${key} Star`);
        }
      });
      setActiveTags({
        tags,
        filterOn: true,
      });
    } else {
      setActiveTags({
        tags: [],
        filterOn: false,
      });
    }
  }, [filterStatus.filterCount]);

  return (
    <Ratings>
      {starList.map((item) => {
        const scorePerct = Math.floor((item.decimal) * 100).toString().concat('%');
        return (
          <RatingBar
            key={item.id}
            scorePerct={scorePerct}
            id={item.id.toString()}
            data-testid="ratingBar"
            toggleFilter={toggleFilter}
          />
        );
      })}
      {activeTags.filterOn ? (
        <ClearFilter onClick={removeAllFilter}>
          Remove all filters
        </ClearFilter>
      ) : ''}
      {activeTags.tags.length ? (
        <SortingTags>
          {'Active Tags are : '}
          {activeTags.tags.join(', ')}
        </SortingTags>
      ) : ''}
    </Ratings>
  );
}

// Style components
const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-right: 3rem;
`;
const SortingTags = styled.div`

`;
const ClearFilter = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
`;
// TODO: figure out nested proptype
RatingList.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
};
