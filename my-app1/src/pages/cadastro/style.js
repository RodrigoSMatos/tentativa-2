import styled from "styled-components";

export const Containe = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
  padding: 20px;
  overflow-y: auto;
`;

export const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #0d6efd;
  font-size: 28px;
  font-weight: bold;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px 16px;
    border: 1px solid #ddd;
    text-align: left;
    font-size: 15px;
  }

  th {
    background-color: #0d6efd;
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Input = styled.input`
  flex: 1 1 180px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
`;



export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
`;

export const FiltroWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;