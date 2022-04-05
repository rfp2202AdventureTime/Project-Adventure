import React, { useContext } from 'react';
import styled from 'styled-components';
import sampleData from '../../sampleData';
// import StyleThumbnailList from './StyleThumbnailList';
import { CurrentStyles } from './../../contexts/CurrentStyles';
import { ActiveStyleId } from './../../contexts/ActiveStyleId';

// const getActiveStyle = (currentStyles, activeStyleID) => {
//   let activeStyle = currentStyles[0];
//   for (let i = 0; i < currentStyles.length; i += 1) {
//     if (currentStyles[i].style_id === activeStyleID) {
//       activeStyle = currentStyles[i];
//     }
//   }
//   return activeStyle;
// };

// function Individualcard() {
//   const [currentStyles] = useContext(CurrentStyles);
//   const [activeStyleId] = useContext(ActiveStyleId);
//   const activeStyle = getActiveStyle(currentStyles, activeStyleId);
//   console.log(currentStyles);

//   return (
//     <div>
//       <CardText>
//         <p>Test2</p>
//         <p>Test3</p>
//         <p>$69</p>
//         <span>CSS rating with stars</span>
//       </CardText>
//     </div>
//   );
// }

// should retrieve all related products from initial product page
// map each individual card with all the information
console.log(sampleData, 'sample data');
function Individualcard() {
  return (
    <div>
      <CardText>
        <p>{sampleData.products[1].category}</p>
        <p>{sampleData.products[1].name}</p>
        <p>${sampleData.products[1].default_price}</p>
        <span>CSS rating with stars</span>
      </CardText>
    </div>
  );
}

const IndCard = styled.div`
  border-style: solid;
  border-width: 2px;
  width: fit-content;
  margin-right: 30px;
  border-radius: 5px;
  padding: 0 15px 0 15px;
  &:hover {
    box-shadow: 0 8px 16px 0;
  }
`;

const CardText = styled.p`
  padding-left: 1px;
`;

export {
  Individualcard,
  IndCard,
};

{/* <p>{sampleData.products[1].category}</p>
        <p>{sampleData.products[1].name}</p>
        <p>${sampleData.products[1].default_price}</p> */}

      //   <div>
      //   <CardText>
      //     <p>Test2</p>
      //     <p>Test3</p>
      //     <p>$69</p>
      //     <span>CSS rating with stars</span>
      //   </CardText>
      // </div>