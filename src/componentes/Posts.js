import { useState } from "react";

export default function Posts() {
  const p = [
    {
      usuario: "assets/img/meowed.svg", altUsuario: "meowed",nome: "meowed",post: "assets/img/gato-telefone.svg",altPost: "gato-telefone",like: "assets/img/respondeai.svg", altLike: "respondeai", curtidas: 101523,
    },
    {
      usuario: "assets/img/barked.svg", altUsuario: "barked", nome: "barked", post: "assets/img/dog.svg", altPost: "dog",like: "assets/img/adorable_animals.svg", altLike: "adorable_animals", curtidas: 99159,
    },
  ];

  return (
    <div className="posts">
      {p.map((x, i) => (
        <Post
          key={i}
          usuario={x.usuario}
          altUsuario={x.altUsuario}
          nome={x.nome}
          post={x.post}
          altPost={x.altPost}
          like={x.like}
          altLike={x.altLike}
          curtidas={x.curtidas}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [likes, setLikes] = useState(props.curtidas);

  function toggleCurtida() {
    setCurtido(!curtido);
    setLikes(curtido ? likes - 1 : likes + 1);
  }

  function curtirImagem() {
    if (!curtido) {
      setCurtido(true);
      setLikes(likes + 1);
    }
  }

  function toggleSalvo() {
    setSalvo(!salvo);
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.usuario} alt={props.altUsuario} />
          {props.nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.post} alt={props.altPost} onClick={curtirImagem} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={curtido ? "heart" : "heart-outline"}
              onClick={toggleCurtida}
              style={{ color: curtido ? "red" : "black" }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvo ? "bookmark" : "bookmark-outline"}
              onClick={toggleSalvo}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.like} alt={props.altLike} />
          <div className="texto">
            Curtido por <strong>{props.altLike}</strong> e{" "}
            <strong>outras {likes.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
