import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [coloboradores, setColaborador] = useState([])

  const novoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador=>novoColaboradorAdicionado(colaborador)}/> {/* estou colocando passando como parmametro dentro de novoColaborador um objeto */}
    </div>
  );
}

export default App;

