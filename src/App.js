import HelloWorld from './HelloWorld';
// import Counter from './Counter';
import CounterTwo from './CounterVTwo';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
      </header>
      <main>
        <h2>A Clean Starting Point!</h2>
        <Counter />
        <CounterTwo />
      </main>
    </div>
  );
}