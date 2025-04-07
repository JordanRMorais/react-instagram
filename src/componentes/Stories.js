export default function Stories(){

const a = [ {imagem:"assets/img/9gag.svg", alt:"9gag", usuario:"9gag"},
            {imagem:"assets/img/meowed.svg", alt:"meowed", usuario:"meowed"},
            {imagem:"assets/img/barked.svg", alt:"barked", usuario:"barked"}, 
            {imagem:"assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet", usuario:"nathanwpylestrangeplanet"},
            {imagem:"assets/img/wawawicomics.svg", alt:"wawawicomics", usuario:"wawawicomics"}, 
            {imagem:"assets/img/respondeai.svg", alt:"respondeai", usuario:"respondeai"}, 
            {imagem:"assets/img/filomoderna.svg", alt:"filomoderna", usuario:"filomoderna"}, 
            {imagem:"assets/img/memeriagourmet.svg", alt:"memeriagourmet", usuario:"memeriagourmet"} 

]

return (
<div className="stories">
  {a.map(s => <Storie imagem = {s.imagem} alt= {s.alt} usuario= {s.usuario} />)}
</div>
)
}


function Storie (props){
  return (
    <div className="story">
  <div className="imagem">
    <img src={props.imagem} alt={props.alt}/>
  </div>
  <div className="usuario">
    {props.usuario}
  </div>
</div>
  )
}
