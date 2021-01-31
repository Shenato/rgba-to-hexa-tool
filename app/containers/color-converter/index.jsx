import Input from 'Components/input';
import React, { useContext, useEffect, useState } from 'react';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components';
import { RGBAStringToArray, rgbaToHexa, getCorrectTextColor, hexaToRgba } from 'Utils/colors';

const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10vh;

  width: 100%;
  padding: 2rem 0.5rem;
`;

const ColorConverter = ({ setMainBackground }) => {
  const themeContext = useContext(ThemeContext);
  const initialBackground = themeContext.mainCanvas;
  const [rgbValue, setrgbValue] = useState(initialBackground);
  const [hexaValue, sethexaValue] = useState(convertRGB(initialBackground));
  useEffect(() => {
    setMainBackground(hexaValue);
  }, [hexaValue]);
  function convertRGB(rgbValue) {
    const colorValuesArray = RGBAStringToArray(rgbValue);
    console.log(colorValuesArray);
    if (!colorValuesArray || colorValuesArray.length < 3) {
      return;
    }
    const hex = rgbaToHexa(colorValuesArray);
    return hex;
  }

  const convertHEXA = (hexaValue) => {
    const rgbaString = hexaToRgba(hexaValue);
    console.log(rgbaString);
    return rgbaString;
  };

  const onChangeRGBA = (e) => {
    setrgbValue(e.target.value);
    const hex = convertRGB(e.target.value);
    if (hex) {
      sethexaValue(hex);
    }
  };
  const onChangeHEXA = (e) => {
    sethexaValue(e.target.value);
    const rgbaString = convertHEXA(e.target.value);
    if (rgbaString) {
      setrgbValue(rgbaString);
    }
  };

  return (
    <Wrapper background={hexaValue}>
      <Input label="RGBA" value={rgbValue} onChange={onChangeRGBA} />
      <span>TO</span>
      <Input label="HEXA" value={hexaValue} onChange={onChangeHEXA} />
    </Wrapper>
  );
};
export default ColorConverter;
