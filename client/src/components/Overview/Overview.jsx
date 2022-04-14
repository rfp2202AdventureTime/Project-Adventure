import React from 'react';
import styled from 'styled-components';

import { FiCheck } from 'react-icons/fi';

import { useCurrentProduct } from '@Contexts/ProductIDContext';
import { useActiveStyle } from '@Contexts/StylesProvider';
import { useMeta } from '@Contexts/ReviewMeta';

import Price from '@Components/Shared/Price';
import Star from '../../Star';

import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';

function Overview() {
  const { activeStyle } = useActiveStyle();
  const { currentProduct } = useCurrentProduct();
  const currentMeta = useMeta();
  const photos = activeStyle ? activeStyle.photos : null;

  const preheading = (
    <RatingInfo>
      <a href="#ratings">
        <StarWrapper>
          <Star score={currentMeta ? currentMeta.avgRating : 0} />
        </StarWrapper>
      </a>
    </RatingInfo>
  );

  const heading = (
    <>
      <Category>{currentProduct && currentProduct.category}</Category>
      <ProductName>{currentProduct ? currentProduct.name : 'Product Loading'}</ProductName>
    </>
  );

  const content = (
    <>
      {activeStyle
        && <Price original={activeStyle.original_price} discount={activeStyle.sale_price} />}
      {activeStyle && <StyleSelector />}
      {activeStyle && <AddToCart skus={activeStyle.skus} />}
    </>
  );

  return (
    <>
      <ImageGallery preheading={preheading} heading={heading} content={content} photos={photos} />

      <AdditionalDetails>
        <LongDescription>
          <h3>{currentProduct ? currentProduct.slogan : '' }</h3>
          <p>{currentProduct ? currentProduct.description : '' }</p>
        </LongDescription>
        <Features>
          <FeatureItems>
            {currentProduct
            && currentProduct.features.map((f, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <FeatureItem key={i}>
                <FiCheck size={18} />
                <strong>{`${f.feature} `}</strong>
                {f.value}
              </FeatureItem>
            ))}
          </FeatureItems>
        </Features>
      </AdditionalDetails>
    </>
  );
}

const RatingInfo = styled.div`
`;

const StarWrapper = styled.div`
  display: inline-block;
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;

const FeatureItems = styled.ul`
  list-style-type: none;
  margin: 0 0 0 30px;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 0.8em;
  & > * {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: -4px;
  }
`;

const AdditionalDetails = styled.section`
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  padding: 50px 100px;
  @media (max-width: 767px) {
    padding: 40px;
  }
  & p {
    padding-top: 10px;
  }
`;

const LongDescription = styled.div`
  display: inline-block;
  width: 65%;
  padding-right: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
  @media (max-width: 767px) {
    width: 100%;
    border-width: 0px;
    padding-bottom: 20px;
    padding-right: 0;
  }
`;

const Features = styled.div`
  display: inline-block;
  width: 35%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 2em;
`;

const Category = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.9em;
`;

export default Overview;
