import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Star({ score }) {
  const scorePerct = Math.floor((score / 5) * 100).toString().concat('%');
  const width = { width: scorePerct };
  return (
    <StarBlock>
      <div className="ratings">
        <div className="empty-stars" />
        <div
          className="full-stars"
          style={width}
          />
      </div>
    </StarBlock>
  );
}

Star.propTypes = {
  score: PropTypes.number.isRequired,
};

const StarBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

// **** Potential refactor using style components ****

// export default function Star() {
//   return (
//     <StarRating>
//       <EmptyStar>
//         {/* test */}
//       </EmptyStar>
//       <FullStars width="80%">
//         {/* test */}
//       </FullStars>
//     </StarRating>
//   );
// }

// const StarRating = styled.div`
//   position: relative;
//   vertical-align: middle;
//   display: inline-block;
//   color: #b1b1b1;
//   overflow: hidden;
// `;

// const FullStars = styled.div`(props => ({
//   position: absolute;
//   left: 0;
//   top: 0;
//   white-space: nowrap;
//   overflow: hidden;
//   color: #fde16d;
//   width: props.width;
//   &::before: {
//     content:"\\2605\\2605\\2605\\2605\\2605";
//     font-size: 14pt;
//     -webkit-text-stroke: 1px orange;
//   }
// }))
// `;

// const EmptyStar = styled.div`
//   &::before: {
//     content:'\2605\2605\2605\2605\2605';
//     font-size: 14pt;
//     -webkit-text-stroke: 1px #848484;
//   }
// `;
