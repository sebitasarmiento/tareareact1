import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





const data = {
  dogs: [
    {
      name: 'Bartolo',
      description: 'Lleno de energia y listo para jugar! Dale a bartolo el hogar amoroso que se merece!',
      image: '/images/siberiano.jpg',
      color: 'success',
    },
    {
      name: 'Messi',
      description: 'Es jugueton, amigable y se lleva bien con los niños y otros animales. Haz de messi parte de tu famillia hoy mismo!',
      image: '/images/bobtail.jpg',
      color: 'primary',
    },
    {
      name: 'Gohan',
      description: 'Un perro de tamaño mediano con un corazon Gigante. Hazte amigo de gohan y experimenta un amor incondicional!',
      image: '/images/sharpei.jpg',
      color: 'info',
    },
    {
      name: 'Princesa',
      description: 'Es una compañera leal y cariñosa que acepta que adora los mimos y los abrazos. Ayuda a princesa a encontrar su final Feliz!',
      image: '/images/beagle.jpg',
      color: 'secondary',
    },
  ],
};

function App() {
  

  return (
    <div>
      <Header></Header>
      <main>
        <Gallery dogs = {data.dogs}></Gallery>
       

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
    
}

export default App
