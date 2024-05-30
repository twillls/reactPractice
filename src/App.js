import HelloWorld from './HelloWorld';
import MyProps from './props';
import PropChildren from './PropChildren';
import DefaultProps from './DefaultProps';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <p>
          Welcome to React 😎
        </p>
      </header>
      <main>
        <MyProps title="This is my prop" text="Hello! I'm a prop!" linkText="Click me!" showLink={true}/>
        <PropChildren type="List">
          <div>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
        </PropChildren>
        <PropChildren type="Paragraph">
          <div>
            <p>I'm a paragraph!</p>
          </div>
        </PropChildren>
        <DefaultProps />
      </main>
    </div>
  );
}

export default App;
