import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
      <main>
        <h2>A Clean Starting Point!</h2>
      </main>
    </div>
  );
}

export default App;
