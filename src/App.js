import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import FotoPerfil from './components/FotoPerfil';
import SaludoP from './components/SaludoP';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Saludo nombre={"Emilio"}/>
      <FotoPerfil url={"https://www.deviantart.com/zunopziz/art/Dandadan-Season-02-Folder-Icon-1210354839"} width= {100}/>    
      <SaludoP nombre={"Emilio"}/>
    </div>
  );
}

export default App;
