import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FactorEntry from './FactorEntry';

export default function FactorBar({ factor, score }) {
  const barWidth = 15;
  const width = `${barWidth}rem`;
  const distanceToLeft = `${Math.floor((barWidth * score) / 5)}rem`;

  return (
    <FactorBlock>
      <div>
        {factor}
      </div>
      <BarContainer>
        <Bar width={width}>
          <Pointer
            left={distanceToLeft}
          />
        </Bar>
      </BarContainer>
      <FactorDescirption>
        <FactorEntry
          factor={factor}
        />
      </FactorDescirption>
    </FactorBlock>
  );
}

// Style components

const FactorBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2.5rem 0 2rem;
`;
const BarContainer = styled.div`
  position: relative;
  padding-bottom: 0.6rem;
`;
const Bar = styled.div`
  top: 0;
  left: 0;
  vertical-align: left;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  width: ${({ width }) => width};
  height: 0.5rem;
`;
const Pointer = styled.div`
  position: absolute;
  &:before {
    content: "▼";
  }
  z-index: 5;
  margin-top:-6px;
  font-size: 0.87rem;
  margin-left:  ${(props) => props.left};
`;
const FactorDescirption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.8rem;
`;

FactorBar.propTypes = {
  factor: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
