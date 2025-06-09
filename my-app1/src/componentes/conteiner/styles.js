// src/componentes/conteiner/styles.js
import styled from "styled-components";

const Conteiner = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: #e2e2e2;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
`;

export default Conteiner;
