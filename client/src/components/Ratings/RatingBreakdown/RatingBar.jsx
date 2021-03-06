import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useTracking from '@Contexts/ClickTracker';
import { ClickableText } from '../../../contexts/Shared.styled';

export default function RatingBar({ scorePct, id, toggleFilter }) {
  const { trackEvent } = useTracking({ widget: 'Rating_Bar_Sort' });
  const handleClick = (e) => {
    trackEvent({ element: 'Sort_by_Star' });
    const selected = e.target.className.slice(-1);
    toggleFilter(selected);
  };

  return (
    <RatingBarBlock>
      <ClickableText
        className={`${id}`}
        onClick={handleClick}
      >
        {`${id} Star`}
      </ClickableText>
      <GreyBar>
        <GreenBar
          width={scorePct}
        />
      </GreyBar>
    </RatingBarBlock>
  );
}

// Style components

const RatingBarBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding : 0 0.5rem 0.5rem 0.5rem ;
  height: 1.5rem;
  justify-content: flex-end;
  width: 15rem;
  overflow: hidden;
`;

const GreyBar = styled.div`
  left: 1.3rem;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.emptyBar};
  overflow: hidden;
  width: 10rem;
  height: 0.5rem;
`;

const GreenBar = styled.div`
  height: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  background-color: #4CAF50;
  width: ${({ width }) => width};
`;

RatingBar.propTypes = {
  scorePct: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};
