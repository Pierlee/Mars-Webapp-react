import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  // console.log(props.itens)
  return(
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      {/*Select é required quando tivermos props.required */}
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}>
        {/* para cada nome quero dar uma option (utilizamos o map que para cada item retorna uma option)*/}
        {props.itens.map(item => {
          // cada item da sua lista deve ter uma chave unica
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa
































