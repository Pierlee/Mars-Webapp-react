import './AreaDescricao.css'

const AreaDescricao = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return(
    <div className='area-descricao'>
      <label>{props.label}</label>
      <textarea class="textarea" value={props.valor} onChange={aoDigitado} placeholder={props.placeholder}>{props.descricao}</textarea>
    </div>
  )
}

export default AreaDescricao