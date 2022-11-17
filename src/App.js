import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programaçao',
      corSecundaria:'#D9F7E9',
      corPrimaria:'#57C278'
    },
    {
      nome:'Front-End',
      corSecundaria:'#E8F8FF',
      corPrimaria:'#82CFFA'
    },
    {
      nome:'Ux e Design',
      corSecundaria:'#FAE9F5',
      corPrimaria:'#DB6EBF'
    },
    {
      nome:'Inovacao e Gestao',
      corSecundaria:'#FFEEDF',
      corPrimaria:'#FFBA29'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador])
  } 

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/> {/* estou passando como parmametro dentro de novoColaborador um objeto */}
      {/* <Time nome="Progoramacao"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/> */}
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;

