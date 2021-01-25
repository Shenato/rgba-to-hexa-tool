import React, { useState } from "react";
import styled from "styled-components";
import { RGBAStringToArray, rgbaToHexa } from "Utils/colors";

const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20%;
  background: ${({ theme }) => theme.shadeCanvas};
  width: 100%;
  padding: 2rem 0.5rem;
`;
const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;
const ColorConverter = ({}) => {
  const [rgbValue, setrgbValue] = useState("rgba(0,0,0,0)");
  const [hexaValue, sethexaValue] = useState("#00000000");
  const convert = () => {
    const colorValuesArray = RGBAStringToArray(rgbValue);
    console.log(colorValuesArray);
    if (!colorValuesArray || colorValuesArray.length < 3) {
      return;
    }
    const hex = rgbaToHexa(colorValuesArray);
    sethexaValue(hex);
  };
  return (
    <Wrapper>
      <Vertical>
        <label>RGBA</label>
        <input
          value={rgbValue}
          onChange={(e) => {
            setrgbValue(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              convert();
            }
          }}
        />
      </Vertical>
      <Vertical>
        <label>HEXA</label>
        <input
          value={hexaValue}
          onChange={(e) => {
            sethexaValue();
          }}
        />
      </Vertical>
      <button onClick={convert}>Convert</button>
    </Wrapper>
  );
};
export default ColorConverter;
