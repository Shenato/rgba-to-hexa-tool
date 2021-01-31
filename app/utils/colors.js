import theme from "Styles/vars";

export const RGBAStringToArray = (rgbaString = "rgba(0,0,0,0)") => {
  if (!rgbaString.match(/(rgba\(.*?\))|(rgb\(.*?\))/)) {
    console.error("not a RGBA string");
    return;
  }
  const colorValues = rgbaString.match(/[.?\d]+/g);
  if (colorValues?.some((c) => Number.isNaN(c))) {
    return;
  }
  return colorValues;
};

export function rgbaToHexa([r, g, b, a]) {
  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);
  const alpha = a && alphaToHex(a);
  console.log([red, green, blue, alpha]);
  return `#${red}${green}${blue}${alpha || ""}`;
}

function alphaToHex(value) {
  value = Math.round(value * 100) / 100;
  const alpha = Math.min(Math.round(value * 255), 255);
  console.log("alpha", alpha);
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  // const perc = Math.round(value * 100);

  return hex;
}
function componentToHex(c) {
  const hex = parseInt(c).toString(16);
  const returnValue = hex.length == 1 ? "0" + hex : hex;
  return returnValue.toUpperCase();
}
let lastResult;
export function getCorrectTextColor(hex) {
  if (!hex) {
    return lastResult;
  }
  /*
  From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast
  
  Color brightness is determined by the following formula: 
  ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
  
  I know this could be more compact, but I think this is easier to read/explain.
  
  */

  const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);
  const hAlpha = hexToA(hex);

  function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }
  function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }
  function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }
  function hexToA(h) {
    return parseInt(cutHex(h).substring(6, 8), 16);
  }
  function cutHex(h) {
    return h.charAt(0) == "#" ? h.substring(1, 7) : h;
  }

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    lastResult = theme.textDark;
    return theme.textDark;
  } else {
    lastResult = theme.textMain;
    return theme.textMain;
  }
}
