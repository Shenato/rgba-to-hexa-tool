import React from 'react';
import styled from 'styled-components';
const FooterWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    :not(:last-child) {
      padding-bottom: 1rem;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>
      <a href="https://github.com/Shenato/rgba-to-hexa-tool">Check out project on github</a>
    </p>
    <p>
      Made with ♥ by <a href="https://www.shenato.com">Omar 'Shenato' ElGaml</a>
    </p>
  </FooterWrapper>
);

export default Footer;
