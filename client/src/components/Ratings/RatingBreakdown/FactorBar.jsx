import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FactorType from './FactorType';

export default function FactorBar({ factor, score }) {
  // caculate the left space based on lenth of factorbar(15rem)
  const distanceToLeft = Math.floor((15 * score) / 5).toString().concat('rem');

  return (
    <FactorBarBlock>
      <FactorInfo>
        {factor}
      </FactorInfo>
      <BarContainer>
        <GreyBar>
          <Arrow left={distanceToLeft} />
        </GreyBar>
      </BarContainer>
      <FactorSummary>
        <FactorType
          factor={factor}
        />
      </FactorSummary>
    </FactorBarBlock>
  );
}

// Style components

const FactorBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2.5rem 0 2rem;
`;

const FactorInfo = styled.div`
`;
const FactorSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const BarContainer = styled.div`
  position: relative;
  padding-bottom: 0.6rem;
`;
const GreyBar = styled.div`
  top: 0;
  left: 0;
  vertical-align: left;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  width: 15rem;
  height: 0.5rem;
`;

const Arrow = styled.div`
  position: absolute;
  &:before {
    content: "▼";
  }
  z-index: 5;
  margin-top:-6px;
  font-size: 0.87rem;
  margin-left:  ${(props) => props.left};
`;

FactorBar.propTypes = {
  score: PropTypes.string.isRequired,
  factor: PropTypes.string.isRequired,
};
