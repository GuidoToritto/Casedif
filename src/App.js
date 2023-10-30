import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Main } from './components/Main';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      <Work/>
      <Header/>
      <Banner/>
      <Main/>
    </div>
  );
}

export default App;
