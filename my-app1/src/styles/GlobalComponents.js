import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
`;

export const Title = styled.h2`
  text-align: center;
  color: #0d6efd;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

export const Field = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: 600;
  }

  input {
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
  }

  input:focus {
    border-color: #0d6efd;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ variant }) =>
    variant === "danger" ? "#dc3545" : variant === "secondary" ? "#6c757d" : "#0d6efd"};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
  border-radius: 12px;
  overflow: hidden;

  th, td {
    padding: 12px 16px;
    text-align: left;
  }

  thead {
    background-color: #0d6efd;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f1f3f5;
  }

  button {
    font-size: 14px;
  }
`;
