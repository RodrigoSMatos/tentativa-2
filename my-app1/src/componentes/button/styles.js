// src/componentes/button/styles.js
import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  color: #fff;
  background-color: ${({ color }) => color || "#0d6efd"};
  transition: background-color 0.3s;

  &:hover {
    filter: brightness(0.95);
  }
`;
