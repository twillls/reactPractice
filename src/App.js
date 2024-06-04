import HelloWorld from './HelloWorld';
import logo from './logo.svg';

// Stylesheets can be imported, allowing styles to be more modular and organized
import './App.css';
// To prevent conflicts, CSS modules can be used with the file name format fileName.module.css
// and imported like this: import styles from './fileName.module.css'
// this creates a styles object that will now hold the selectors from fileName, and can be accessed
// using dot notation, like this: className={styles.divStyle}
// Note that className attribute is used in place of class

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
