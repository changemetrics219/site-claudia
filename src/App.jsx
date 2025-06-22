import './style.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Testemunhos from './components/Testemunhos';
import Contato from './components/Contacto';
import Footer from './components/Footer';
import Cursos from './components/Cursos';

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Cursos />
      <Testemunhos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
