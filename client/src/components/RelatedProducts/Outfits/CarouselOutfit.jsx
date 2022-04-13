import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Individualcard } from '../Cards/Individualcard';
import { useCurrentProduct, useCurrentProductId } from '../../../contexts/ProductIDContext';
import { useCurrentStyles } from '../../../contexts/StylesProvider';

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

  const { currentProductId } = useCurrentProductId();

  if (useCurrentStyles() && currentProductId) {
    const currentThumbnail = useCurrentStyles()[0]?.photos[0].thumbnail_url
    const [outfitThumbnail, setOutfitThumbnail] = useState(currentThumbnail);



    const AddToStorage = (product) => {
      // console.log(product, 'product');

      axios({
        method: 'GET',
        url: `/products/${product}`,
      })
        .then(({ data }) => {
          let dataTest = [data, currentThumbnail]
          localStorage.setItem(data.id, JSON.stringify(dataTest));
        });
    };


    const itemsLocal = { ...localStorage };
    const keys = Object.keys(itemsLocal);
    const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));
    const [outfitArray, setOutfitArray] = useState([...testingArray]);

    // used only for testing REMOVE
    useEffect(() => {
      console.log(outfitArray, 'local');
      const itemsLocal = { ...localStorage };
      const keys = Object.keys(itemsLocal);
      const testingArray = keys.map((item) => JSON.parse(localStorage.getItem(item)));
    }, [itemsLocal]);

  if (displayed) {
    return (
      <CarouselContainerR>
        {zippedArray.length > 3 ? <LeftArrowR onClick={() => prev()}><FiChevronLeft size={40} /></LeftArrowR> : <LeftArrowR />}

        <CarouselWrapperR>
          <AddButton>

            <CardImage
              url="https://icon-library.com/images/plus-symbol-icon/plus-symbol-icon-5.jpg"
              onClick={() => AddToStorage(currentProductId)}
            />

            <OutfitText>Add to Outfit</OutfitText>

          </AddButton>
      {/* <AddedOutfit> */}

          {displayed.map((item, key) => <Individualcard product={item} key={key} />)}

      {/* </AddedOutfit> */}
          {zippedArray.length > 3 ? <RightArrowR onClick={() => next()}><FiChevronRight size={40} /></RightArrowR> : <RightArrowR />}
        </CarouselWrapperR>
      </CarouselContainerR>
    );
  }
}
}

// remove border line after
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

const CardImage = styled.div`
  width: 250px;
  height: 250px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  margin-right: 5px;
`;

const AddButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 6px rgba(90, 90, 90, 0.8);
  }
  // margin-right: 5px;
`;

const AddedOutfit = styled.div`
  display: relative;
  margin-left: 15px;
  height: fit-content;
  flex-direction: row;
`;

const OutfitText = styled.p`
  text-align: center;
`;
export default CarouselRelated;
