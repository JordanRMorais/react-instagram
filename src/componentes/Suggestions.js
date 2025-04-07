export default function Suggestions (){

 
  const a = [{imagem:"assets/img/bad.vibes.memes.svg", alt:"bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
            {imagem:"assets/img/chibirdart.svg", alt:"chibirdart", nome:"chibirdart", razao:"Segue você"},
            {imagem:"assets/img/razoesparaacreditar.svg", alt:"razoesparaacreditar", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
            {imagem:"assets/img/adorable_animals.svg", alt:"adorable_animals", nome:"adorable_animals", razao:"Segue você"},
            {imagem:"assets/img/smallcutecats.svg", alt:"smallcutecats", nome:"smallcutecats", razao:"Segue você"},
  ]


    return (
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
      {a.map(s =><Suggestion imagem={s.imagem} alt = {s.alt} nome = {s.nome} razao = {s.razao}/>)}

      </div>
    )

}

function Suggestion (props){
   const textoBotao = "Seguir"
  return (
    <div className="sugestao">
    <div className="usuario">
  <img src={props.imagem} alt={props.alt}/>
  <div className="texto">
    <div className="nome">{props.nome}</div>
    <div className="razao">{props.razao}</div>
  </div>
</div>

<div className="seguir">{textoBotao}</div>
</div>

  )
}

