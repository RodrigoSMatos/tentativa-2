import * as S from "./styles";

const Button = ({ texto, onClick, tipo = "button" }) => {
  return (
    <S.Button type={tipo} onClick={onClick}>
      {texto}
    </S.Button>
  );
};

export default Button;
