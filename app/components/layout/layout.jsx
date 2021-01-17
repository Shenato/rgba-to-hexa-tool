import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;
const AppLayout = ({ children }) => {
  return <StyledWrapper id="layout-wrapper">{children}</StyledWrapper>;
};
export default AppLayout;
