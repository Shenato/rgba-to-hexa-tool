import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  background: ${({ theme }) => theme.shadeCanvas};
  width: 100%;
  padding: 2rem 0.5rem;
`;

const ColorConverter = ({}) => {
  const [rgbValue, setrgbValue] = useState("");
  const [hexaValue, sethexaValue] = useState("");
  return (
    <Wrapper>
      RGB
      <input
        value={rgbValue}
        onChange={(e) => {
          setrgbValue(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setrgbValue("");
          }
        }}
      />
      <input
        value={hexaValue}
        onChange={(e) => {
          sethexaValue();
        }}
      />
    </Wrapper>
  );
};
export default ColorConverter;
