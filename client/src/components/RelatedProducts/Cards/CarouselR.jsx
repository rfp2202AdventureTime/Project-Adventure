import { React, useState } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Individualcard } from './Individualcard';

function CarouselRelated({ zippedArray }) {
  const [viewIndex, setViewIndex] = useState(0);

  const displayed = zippedArray.slice(viewIndex, (viewIndex + 4));

  const maxDisplayed = zippedArray.length - 4;

  const next = () => {
    if (viewIndex === maxDisplayed) {
      setViewIndex(0);
    }
    setViewIndex((viewIndex) => viewIndex + 1);
  };

  const prev = () => {
    if (viewIndex === 0) {
      setViewIndex(0);
    } else {
      setViewIndex((viewIndex) => viewIndex - 1);
    }
  };

  if (displayed) {
    return (
      <CarouselContainerR>
        {zippedArray.length > 3 ? <LeftArrowR onClick={() => prev()}><FiChevronLeft size={40} /></LeftArrowR> : <LeftArrowR />}

        <CarouselWrapperR>

          {displayed.map((item, key) => <Individualcard product={item} key={key} />)}

          {zippedArray.length > 3 ? <RightArrowR onClick={() => next()}><FiChevronRight size={40} /></RightArrowR> : <RightArrowR />}
        </CarouselWrapperR>
      </CarouselContainerR>
    );
  }
}

const CarouselContainerR = styled.div`
  position: relative;
  width: 1100px;
  height: fit-content;
  flex-direction: column;
`;

const CarouselWrapperR = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const LeftArrowR = styled.div`
  position: absolute;
  z-index: 500;
  top: 35%;
  left: 0;
  width: 48px;
  height: 48px;
`;

const RightArrowR = styled.div`
  position: absolute;
  z-index: 500;
  top: 35%;
  right: 0;
  width: 48px;
  height: 48px;
`;

export default CarouselRelated;
