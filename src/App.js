import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';
import SocialNetwork from './SocialNetwork';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
      <main>
        <h2>A Clean Starting Point!</h2>
        <SocialNetwork />
      </main>
    </div>
  );
}

export default App;
