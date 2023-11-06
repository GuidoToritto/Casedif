import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Main } from './components/Main';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Banner/>
      <Main/>
      <br/>
      <h5>Casedif  |  Todos los derechos reservados 2023 ®</h5>
    </div>
  );
}

export default App;
