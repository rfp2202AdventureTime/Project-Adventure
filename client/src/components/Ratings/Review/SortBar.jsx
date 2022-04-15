import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SortBar({ handleSort, totalCT, allCT }) {
  const sort = (e) => {
    handleSort(e.target.value);
  };

  return (
    <SortBarBlock>
      {`Showing ${totalCT} reviews of ${allCT} reviews, sorted by`}
      <DropDown name="sort" onChange={sort} id="mySelect">
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </DropDown>
    </SortBarBlock>
  );
}

// Style components

const SortBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.1rem 0.8rem 0.2rem 0.8rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  font-size: medium;
  gap: 0.4rem;
`;

const DropDown = styled.select`
  font-weight:bold;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.light};
`;

SortBar.propTypes = {
  handleSort: PropTypes.func.isRequired,
  totalCT: PropTypes.number.isRequired,
  allCT: PropTypes.number,
};

SortBar.defaultProps = {
  allCT: null,
};
