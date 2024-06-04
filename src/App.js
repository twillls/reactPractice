import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

function App() {
  const myStyle = {
    background: 'lightblue',
    color: 'darkblue'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
      <main>
        <h2 style={myStyle}>A Clean Starting Point!</h2>
        <p style={{ background: 'lightgreen', color: 'darkgreen' }}>This is styled with inline styles</p>
      </main>
    </div>
  );
}

// 1. CSS properties in JSX are written in camelCase because hyphens are interpreted as minus signs
// 2. px is always assumed, ex. fontSize: 30 assumes 30px. To use a different unit, pass a string.
// Ex. fontSize: "2em"

export default App;
