export const RGBAStringToArray = (rgbaString = 'rgba(0,0,0,0)') => {
  if (!rgbaString.match(/(rgba\(.*?\))/)) {
    console.error('not a RGBA string');
    return;
  }
  const colorValues = rgbaString.match(/[.?\d]+/g);
  return colorValues;
};

export function rgbaToHexa([r, g, b, a]) {
  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);
  const alpha = alphaToHex(a);
  console.log([red, green, blue, alpha]);
  return `#${red}${green}${blue}${alpha}`;
}

function alphaToHex(value) {
  value = Math.round(value * 100) / 100;
  const alpha = Math.min(Math.round(value * 255), 255);
  console.log('alpha', alpha);
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  // const perc = Math.round(value * 100);

  return hex;
}
function componentToHex(c) {
  const hex = parseInt(c).toString(16);
  const returnValue = hex.length == 1 ? '0' + hex : hex;
  return returnValue.toUpperCase();
}
