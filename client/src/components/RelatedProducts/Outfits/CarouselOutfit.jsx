/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { React, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Individualcard } from '../Cards/Individualcard';
import { useCurrentProductId } from '../../../contexts/ProductIDContext';
import { useMeta } from '../../../contexts/ReviewMeta';
import { useCurrentStyles } from '../../../contexts/StylesProvider';
import useTracking from '@Contexts/ClickTracker';

function CarouselAddToOutfit({ informationArray }) {
  const { trackEvent } = useTracking({ widget: 'Add to Outfit'});
  const [viewIndex, setViewIndex] = useState(0);
  const { currentProductId } = useCurrentProductId();
  const currentStyles = useCurrentStyles();
  const starRating = useMeta();
  const displayed = informationArray.slice(viewIndex, (viewIndex + 3));
  const maxDisplayed = informationArray.length - 3;

  const next = () => {
    if (viewIndex === maxDisplayed) {
      setViewIndex((viewIndex) => viewIndex - 1);
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

  const addToStorage = (e, product) => {
    const currentThumbnail = currentStyles[0].photos[0].thumbnail_url;
    e.stopPropagation();
    trackEvent({ element: 'Button' });

    axios({
      method: 'GET',
      url: `/products/${product}`,
    })
      .then(({ data }) => {
        const dataTest = [data, currentThumbnail, starRating, false];
        localStorage.setItem(data.id, JSON.stringify(dataTest));
      });
  };

  if (displayed) {
    return (
      <CarouselContainerR>
        {viewIndex !== 0 ? <LeftArrowR onClick={() => prev()}><FiChevronLeft size={60} /></LeftArrowR> : <LeftArrowR />}

        <CarouselWrapperR>
          <AddButton>

            <CardImage
              url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
              onClick={(e) => addToStorage(e, currentProductId)}
            />

            <OutfitText>Add to Outfit</OutfitText>

          </AddButton>

          <AddedOutfit>
            {displayed.map((item, key) => <Individualcard product={item} key={key} />)}

          </AddedOutfit>
          {(viewIndex !== maxDisplayed && displayed.length >= 3) ? <RightArrowR onClick={() => next()}><FiChevronRight size={60} /></RightArrowR> : <RightArrowR />}
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
  height: fit-content;
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

const CardImage = styled.div`
  display: relative;
  width: 243px;
  height: 250px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

const AddButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 6px rgba(90, 90, 90, 0.8);
  }
`;

const AddedOutfit = styled.div`
  display: flex;
  position: relative;
  margin-left: 25px;
  flex-direction: row;
  width: fit-content;
  height: max-content;
`;

const OutfitText = styled.p`
  text-align: center;
`;
export default CarouselAddToOutfit;
