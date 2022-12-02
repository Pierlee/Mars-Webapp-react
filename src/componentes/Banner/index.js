import './Banner.css'


function Banner() {

  return(
    <div className='container'>
      <div className='row'>        
      <header className="banner">
        <img src="/imagens/Galaxy Drawings Slides Theme.jpg" alt="O Banner da minha pagina"/>
        <p className='heading'>Welcome crew member, you have been selected to take part in our mission.</p>
        {/* <button className='botao'>Click here</button> */}
      </header>
      </div>
    </div>
    )
  }

export default Banner