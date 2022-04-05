// Given an array of styles and a styleId, return a given style.

export default (currentStyles, styleId) => {
  let style = currentStyles[0];
  for (let i = 0; i < currentStyles.length; i += 1) {
    if (currentStyles[i].style_id === styleId) {
      style = currentStyles[i];
    }
  }
  return style;
};
