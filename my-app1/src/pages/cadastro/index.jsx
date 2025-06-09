import React, { useState, useEffect } from "react";
import * as S from "./style";
import Button from "../../componentes/button"; //

function Cadastro() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({ id: "", nome: "", nota: "", comentario: "" });
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const alunosSalvos = localStorage.getItem("alunos");
    if (alunosSalvos) {
      setAlunos(JSON.parse(alunosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("alunos", JSON.stringify(alunos));
  }, [alunos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.id || !form.nome || !form.nota || !form.comentario) {
      alert("Preencha todos os campos.");
      return;
    }

    const idJaExiste = alunos.some((aluno) => aluno.id === form.id);
    if (idJaExiste) {
      alert("Este ID já foi cadastrado. Use um ID diferente.");
      return;
    }

    const notaNumerica = parseFloat(form.nota);
    if (notaNumerica < 1 || notaNumerica > 5) {
      alert("A nota deve estar entre 1 e 5.");
      return;
    }

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const novoAluno = { ...form, data: dataFormatada };
    setAlunos((prevAlunos) => [...prevAlunos, novoAluno]);
    setForm({ id: "", nome: "", nota: "", comentario: "" });
  };

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.id.toLowerCase().includes(filtro.toLowerCase()) ||
    aluno.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    aluno.nota.toLowerCase().includes(filtro.toLowerCase()) ||
    aluno.comentario.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <S.Containe>
      <S.Content>
        <S.H2>Cadastro de Alunos</S.H2>
        <div>
          <S.FiltroWrapper>
          <S.Input
            type="text"
            placeholder="Buscar por ID, nome, nota ou comentário"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{
              padding: "10px",
              marginBottom: "20px",
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />
          </S.FiltroWrapper>

          <form onSubmit={handleSubmit}>
            <S.FormGroup>
            <S.Input
              type="text"
              name="id"
              placeholder="ID do Aluno"
              value={form.id}
              onChange={handleChange}
            />

            <S.Input
              type="text"
              name="nome"
              placeholder="Nome do Aluno"
              value={form.nome}
              onChange={handleChange}
            />

            <S.Input
              type="number"
              name="nota"
              placeholder="Nota (1 a 5)"
              value={form.nota}
              onChange={handleChange}
              min="1"
              max="5"
            />
            

            <S.Input
              type="text"
              name="comentario"
              placeholder="Comentário"
              value={form.comentario}
              onChange={handleChange}
            />
            </S.FormGroup>

            <Button tipo="submit" texto="Cadastrar" color="#0d6efd" />
          </form>

          <S.Table border="1" style={{ marginTop: 20, width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Nota</th>
                <th>Comentário</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {alunosFiltrados.map((aluno, index) => (
                <tr key={index}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.nota}</td>
                  <td>{aluno.comentario}</td>
                  <td>{aluno.data}</td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </div>
      </S.Content>
    </S.Containe>
  );
}

export default Cadastro;
