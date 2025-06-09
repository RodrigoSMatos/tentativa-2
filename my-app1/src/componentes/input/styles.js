// src/componentes/input/styles.js
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 15px;
  background-color: #fff;
  color: #333;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0d6efd44;
  }
`;
