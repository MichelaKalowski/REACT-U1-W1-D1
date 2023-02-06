import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Title</h1>
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
         
          <div>
          <ButtonComponent title="Button1" backgroundColor="red" color="black"/>
          <ButtonComponent title="Button2" backgroundColor="orange" color="black"/>
          <ButtonComponent title="Button3" backgroundColor="yellow" color="black"/>
          </div>
        </a>
        <ImageComponent
        src="https://placekitten.com/300/300"
        alt="catena"
        />
      </header>
    </div>
  );
}

export default App;

