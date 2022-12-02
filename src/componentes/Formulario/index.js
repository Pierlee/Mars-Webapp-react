import { useState } from 'react'
import AreaDescricao from '../AreaDescricao'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [descricao, setDescricao] = useState('')

  const aoSalvar = (evento) => {
    // React tem um comportamento padrao em que tudo atualiza dentro da pagina sem ter que ...
    // atualizar a pagina toda. Para prevenir o comportamento padra use preventDefault
    evento.preventDefault()
    // console.log('Form foi submetido', nome, cargo, imagem, time)
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      descricao,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setDescricao('')
  }

  return(
    <section className='formulario'>
      {/* quando o onSubmit acontecer queremos executar o aoSalvar. Sempre que linkar uma
      variavel javascript usamos as chaves em volta (exemplo {aoSalvar}*/}
      <form ref={props.formSection} onSubmit={aoSalvar}>
      <h2>To create your card fill in with your details</h2>
      <CampoTexto 
        obrigatorio={true} 
        label="Name" 
        placeholder="What is your name?"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      />
      <CampoTexto 
        obrigatorio={true} 
        label="Occupation" 
        placeholder="What is your occupation?"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
      />
      <CampoTexto 
        label="Image" 
        placeholder="Insert your image url here"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
      />
      <ListaSuspensa 
        obrigatorio={true} 
        label="Position" 
        itens={props.times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
      />
      <AreaDescricao 
        label="Description" 
        placeholder="Write a short description about yourself"
        valor={descricao}
        aoAlterado={valor => setDescricao(valor)}
      />
      {/* Esse botao poderia ser qualquer coisa, uma imagem ou um icone. */}
      <Botao>
        Create card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario








































