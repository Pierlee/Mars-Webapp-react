import './Colaborador.css'

  const Colaborador = ({nome, imagem, cargo, descricao, corDeFundo}) => {
    return(
      <div>
        <div className='colaborador'>
          <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
          </div>
          <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
          </div>
        </div>
        <div className='descricao'><p>{descricao}</p></div>
      </div>
    )
  }

export default Colaborador