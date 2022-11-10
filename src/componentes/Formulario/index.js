import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {

  const times = [
    'Programaçao',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovacao e Gestao'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    // React tem um comportamento padrao em que tudo atualiza dentro da pagina sem ter que ...
    // atualizar a pagina toda. Para prevenir o comportamento padra use preventDefault
    evento.preventDefault()
    // console.log('Form foi submetido', nome, cargo, imagem, time)
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return(
    <section className='formulario'>
      {/* quando o onSubmit acontecer queremos executar o aoSalvar. Sempre que linkar uma
      variavel javascript usamos as chaves em volta (exemplo {aoSalvar}*/}
      <form onSubmit={aoSalvar}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite o seu nome"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      />
      <p>{nome}</p>
      <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite o seu nome"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)}
      />
      <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereco da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
      />
      <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={time}
        aoAlterado={valor => setTime(valor)}
      />
      {/* Esse botao poderia ser qualquer coisa, uma imagem ou um icone. */}
      <Botao>
        Criar Card
      </Botao>
      </form>
    </section>
  )
}

export default Formulario








































