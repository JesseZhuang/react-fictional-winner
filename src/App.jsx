import './App.css';
import FunctionalComponent from './component/FunctionalComponent';
import Heading from './component/Heading';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <Heading firstName="Bob" age="30" />
      <Heading firstName="Any name other than Bob" />
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
