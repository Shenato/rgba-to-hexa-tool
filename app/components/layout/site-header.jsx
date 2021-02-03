import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin-top: 10vh;
  font-family: ${({ theme }) => theme.secondaryFont};
`;

const SiteHeader = ({}) => {
  return (
    <StyledHeader>
      <h1>RGBA TO HEXA CONVERTER</h1>
      <div className="subtitle">HEXA is an 8-digit transparency adjusted HEX code</div>
    </StyledHeader>
  );
};
export default SiteHeader;
