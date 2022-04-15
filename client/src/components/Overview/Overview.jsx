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

  return (
    <>
      <ImageGallery photos={photos}>
        <AsideContent>
          <RatingInfo>
            <StarWrapper>
              <Star score={currentMeta ? currentMeta.avgRating : 0} />
            </StarWrapper>
            <ViewRatings href="#ratings">
              View all reviews.
            </ViewRatings>
          </RatingInfo>
        </AsideContent>
        <AsideHeading>
          <Category>{currentProduct ? currentProduct.category : 'CATEGORY'}</Category>
          <ProductName>{currentProduct ? currentProduct.name : 'Product Loading'}</ProductName>
        </AsideHeading>
        <AsideContent>
          {activeStyle
            && <Price original={activeStyle.original_price} discount={activeStyle.sale_price} />}
          {activeStyle && <StyleSelector />}
          {activeStyle && <AddToCart skus={activeStyle.skus} />}
        </AsideContent>
      </ImageGallery>

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
                <Feature>{`${f.feature} `}</Feature>
                {f.value}
              </FeatureItem>
            ))}
          </FeatureItems>
        </Features>
      </AdditionalDetails>
    </>
  );
}

const AsideContent = styled.div`
  width: 32.5%;
  max-height: 500px;
  overflow: scroll;
  padding: 0px 30px;
  color: ${(props) => props.theme.colors.secondary};
  @media (max-width: 1279px) and (min-width: 768px) { width: 50%; }
  @media (max-width: 768px) { width: 100%; }
`;

const AsideHeading = styled(AsideContent)`
  @media (max-width: 768px) {
    padding-top: 10px;
    order: -1;
  }
`;

const Feature = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.title.family}
`;

const RatingInfo = styled.div`
`;

const ViewRatings = styled.a`
  color: ${(props) => props.theme.colors.primary};
  &:visited { ${(props) => props.theme.colors.secondary}; }
  &:active {${(props) => props.theme.colors.secondary}; }
`;

const StarWrapper = styled.div`
  padding-top: 10px;
  display: inline-block;
  margin-right: 5px;
`;

const FeatureItems = styled.ul`
  list-style-type: none;
  margin: 0 0 0 30px;
  padding: 0;
`;

const FeatureItem = styled.li`
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
  & > h3 {
    font-family: ${({ theme }) => theme.fonts.title.family};
    color: ${({ theme }) => theme.colors.primary};
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
  font-family: ${({ theme }) => theme.fonts.title.family};
  font-size: 2em;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Category = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.9em;
`;

export default Overview;
