import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem;
  label {
    font-size: 0.85rem;
    font-family: ${({ theme }) => theme.mainFont};
    font-weight: 600;
  }
  input {
    background-color: ${({ theme }) => theme.mainBackground};
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.textMain};
    color: ${({ theme }) => theme.textMain};
    padding: 0.6rem 0.7rem;
    height: 2.8rem;
    font-size: 1rem;
    &:focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.textMain} 0px 0px 0px 1px;
      border: 1px solid ${({ theme }) => theme.textMain};
      border-radius: 0.375rem;
    }
  }
`;

const UnstyledInput = ({ label, ...rest }) => (
  <InputWrapper>
    <label>{label}</label>
    <input {...rest} />
  </InputWrapper>
);

const Input = styled(UnstyledInput)``;

export default Input;
