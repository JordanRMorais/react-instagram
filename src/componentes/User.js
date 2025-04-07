import { useState } from 'react';

export default function User() {
  const [nome, setNome] = useState("catanacomics");
  const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  function alterarNomeUsuario() {
    const novoNome = prompt("Qual o seu nome?");
    novoNome && setNome(novoNome);
  }

  function alterarImagem() {
    const novaImagem = prompt("Insira o novo link da imagem:");
    novaImagem && setImagem(novaImagem);
  }

  return (
    <div className="usuario">
      <img src={imagem} onClick={alterarImagem} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{nome}</strong>
          <ion-icon onClick={alterarNomeUsuario} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
