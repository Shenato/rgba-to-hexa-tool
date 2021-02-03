import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 100vh;
`;
const AppLayout = ({ children }) => {
  return <StyledWrapper id="layout-wrapper">{children}</StyledWrapper>;
};
export default AppLayout;
