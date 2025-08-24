import logo from './logo.svg';
import './App.css';
import Mango from './apple';
import Sample from './example/sample';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Mango />
       <Sample />
        <a
         
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
