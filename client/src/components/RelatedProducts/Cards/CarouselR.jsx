import React from 'react';
import styled from 'styled-components';

function CarouselRelated(props) {
  const { children } = props;
  return (
    <CarouselContainerR>
      <LeftArrowR />
      <CarouselWrapperR>
        <CarouselContentWrapperR>
          <CarouselContentR>
            {children}
          </CarouselContentR>
        </CarouselContentWrapperR>
      </CarouselWrapperR>
    </CarouselContainerR>
  );
}

const CarouselContainerR = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CarouselWrapperR = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const CarouselContentWrapperR = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselContentR = styled.div`
  display: flex;
  transition all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LeftArrowR = styled.button`
  position: absolute;
  z-index: 500;
  top: 1070px;
  transform: translateY(50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
`;



export default CarouselRelated;
