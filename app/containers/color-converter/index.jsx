import Input from 'Components/input';
import React, { useContext, useEffect, useState } from 'react';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components';
import { RGBAStringToArray, rgbaToHexa, getCorrectTextColor } from 'Utils/colors';

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
  const [hexaValue, sethexaValue] = useState(rgbaToHexa(initialBackground));

  const convert = () => {
    const colorValuesArray = RGBAStringToArray(rgbValue);
    console.log(colorValuesArray);
    if (!colorValuesArray || colorValuesArray.length < 3) {
      return;
    }
    const hex = rgbaToHexa(colorValuesArray);
    sethexaValue(hex);
  };

  useEffect(() => {
    convert();
  }, [rgbValue]);
  useEffect(() => {
    setMainBackground(hexaValue);
  }, [hexaValue]);
  return (
    <Wrapper background={hexaValue}>
      <Input
        label="RGBA"
        value={rgbValue}
        onChange={(e) => {
          setrgbValue(e.target.value);
        }}
      />
      <span>TO</span>
      <Input
        label="HEXA"
        value={hexaValue}
        onChange={(e) => {
          sethexaValue();
        }}
      />
    </Wrapper>
  );
};
export default ColorConverter;
