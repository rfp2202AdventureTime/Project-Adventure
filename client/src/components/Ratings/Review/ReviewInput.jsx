/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useMeta } from '../../../contexts/ReviewMeta';
import AddPhoto from './AddPhoto';

export default function ReviewInput({ data, handleChange, photos, setPhotos }) {
  const meta = useMeta();
  const factorList = (meta) ? meta.characteristics : {};

  const starRating = (
    <div className="rating">
      <input type="radio" name="rating" id="rating-5" value={5} />
      <label htmlFor="rating-5" />
      <input type="radio" name="rating" id="rating-4" value={4} />
      <label htmlFor="rating-4" />
      <input type="radio" name="rating" id="rating-3" value={3} />
      <label htmlFor="rating-3" />
      <input type="radio" name="rating" id="rating-2" value={4} />
      <label htmlFor="rating-2" />
      <input type="radio" name="rating" id="rating-1" value={1} />
      <label htmlFor="rating-1" />
    </div>
  );
  const ratingSummary = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };
  const factorSummary = {
    Size: ['A size too small', 'half a size too small', 'Perfect', 'half a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly unconfortable', 'OK', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs big'],
  };
  const factorSummaryInput = (
    Object.keys(factorList).map((factor, i) => (
      <div key={factor.concat(i)}>
        <FactorLine>
          {factor}
        </FactorLine>
        <RadioBar>
          {factorSummary[factor].map((characteristic, index) => (
            <RadioBlock key={characteristic.concat(index)}>
              <div>
                <input
                  type="radio"
                  name={factor}
                  value={index + 1}
                  required
                />
              </div>
              <Characteristic>
                <label
                  htmlFor={characteristic.concat(index + 1)}
                >
                  {' '}
                  {characteristic}
                </label>
              </Characteristic>
            </RadioBlock>
          ))}
        </RadioBar>
      </div>
    ))
  );

  return (
    <>
      <RowBlock>
        <QuestionBlock>
          <label htmlFor="rating">
            <b>
              Overall rating*
            </b>
            {starRating}
            <Note>
              {(data.rating) ? ratingSummary[data.rating] : ''}
            </Note>
          </label>
        </QuestionBlock>
        <QuestionBlock>
          <label htmlFor="recommendation">
            <b>
              Do you recommendation this product*
            </b>
            <RadioBlock>
              <div>
                <input type="radio" name="recommendation" value="true" defaultChecked onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="yes">{' Yes'}</label>
              </div>
              <div>
                <input type="radio" name="recommendation" value="false" />
              </div>
              <div>
                <label htmlFor="no">{' No'}</label>
              </div>
            </RadioBlock>
          </label>
        </QuestionBlock>
      </RowBlock>
      <QuestionBlock>
        <label htmlFor="characteristics">
          <b>
            Characteristics*
          </b>
          {factorSummaryInput}
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor="photo">
          <AddPhoto
            setPhotos={setPhotos}
            photos={photos}
          />
        </label>
      </QuestionBlock>
      <QuestionBlock>
        <label htmlFor="summary">
          <b>
            Review Summary*
          </b>
          <div>
            <input
              type="text"
              name="summary"
              placeholder="Example: Best purchase ever!"
              required
            />
          </div>
        </label>
      </QuestionBlock>
    </>
  );
}

const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;

const Note = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  padding: 0.5rem;
`;

const Characteristic = styled.div`
  padding: 1rem;
`;

const FactorLine = styled.h5`
  margin: 0.5rem;
  font-style: italic;
`;
const RadioBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.hoverShadow}
  };
`;
const RadioBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.offWhite};

`;
