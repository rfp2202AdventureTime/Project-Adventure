import React from 'react';
import styled from 'styled-components';

function Overview() {
  return (
    <OverviewSection>
      <h1>Product Overview</h1>
    </OverviewSection>
  );
}

const OverviewSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
`;

export default Overview;
