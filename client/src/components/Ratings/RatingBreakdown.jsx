import React from 'react';
import styled from 'styled-components';
import RatingOverview from './RatingOverview';

export default function RatingBreakdown() {
  return (
    <RatingsSection>
      <RatingOverview />
      {/* <RatingList />
      <FactorList /> */}
    </RatingsSection>
  );
}

const RatingsSection = styled.section`
  background-color: ${(props) => props.theme.colors.light};
`;
