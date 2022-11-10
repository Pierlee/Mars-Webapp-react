
import './Botao.css'

const Botao = (props) => {
  return(
  <button className='botao'>
    {/*Esse botao poderia ser qualquer coisa, uma imagem ou um icone. Nao importa o que esteja dentro do tag botao no index.js (formulario) ele será passado como
    props, usando props.children */}
    {props.children}
  </button>
  )
}

export default Botao