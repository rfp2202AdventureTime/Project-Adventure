import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SortBar({ handleSort, totalCT }) {
  const sort = (e) => {
    handleSort(e.target.value);
  };

  return (
    <SortBarBlock>
      <WhiteSpaceWrapper>
        {totalCT}
      </WhiteSpaceWrapper>
      reviews, sorted by
      <SortContainer name="sort" onChange={sort}>
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </SortContainer>
    </SortBarBlock>
  );
}

// Style components

const SortBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  font: 500;
  margin: 0.4rem 0.8rem 0.4rem 0.8rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  font-weight:bold;
  font-size: medium;
`;

const SortContainer = styled.select`
  margin-left: 0.4rem;
`;

const WhiteSpaceWrapper = styled.div`
  margin-right: 0.4rem;
`;

SortBar.propTypes = {
  handleSort: PropTypes.func.isRequired,
  totalCT: PropTypes.number.isRequired,
};
