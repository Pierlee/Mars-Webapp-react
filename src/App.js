import { useState } from 'react';
import Banner from './componentes/Banner';
import Carroussel from './componentes/Carrousel';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

import { motion } from 'framer-motion'
import image1 from './images/1astronaut.jpg';
import image2 from './images/2marsland.jpg';
import image3 from './images/3rocket.jpg';
import image4 from './images/4dirt.jpg';




const images = [image1, image2, image3, image4] // images for the slide


function App() {
  
  const times = [
    {
      nome:'Engineering',
      corSecundaria:'#D9F7E9',
      corPrimaria:'#57C278'
    },
    {
      nome:'Science',
      corSecundaria:'#E8F8FF',
      corPrimaria:'#82CFFA'
    },
    {
      nome:'Health',
      corSecundaria:'#FAE9F5',
      corPrimaria:'#DB6EBF'
    },
    {
      nome:'Civilian',
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
      <Banner/>
      <Carroussel images={images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt="Texto alt"/>
            </motion.div>
          ))}/>

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

