import logo from './logo.svg';
import './App.css';
import GroceryItem from './GroceryItem';

function App() {
  function handleClick(name) {
    alert(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </header>
      <main>
        <>
          <GroceryItem name="Eggs" onClick={handleClick}/>
          <GroceryItem name="Banana" onClick={handleClick} />
          <GroceryItem name="Strawberry" onClick={handleClick} />
          <GroceryItem name="Bread" onClick={handleClick} />
        </>
      </main>
    </div>
  );
}

export default App;
