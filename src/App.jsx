import './App.css';
import FunctionalComponent from './component/FunctionalComponent';
import Heading from './component/Heading';
import Bag from './component/Bag';
import Apples from './component/Apples';
import Pears from './component/Pears';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <Heading firstName="Bob" age="30" />
      <Heading firstName="Any name other than Bob" />
      <Bag children={<Apples color="yellow" number="1" />}>
        {/* overwrote children above */}
        <Pears friend="Peter1" />
      {/* can use self enclosing or separate enclosing html tag */}
      </Bag>
      <Bag children={[<Apples color="yellow" number="2" />, <Pears friend="Peter2" />]}>
      </Bag>
      <Bag>
        {/* Apples and Pears are props of Bag, i.e., props.children */}
        <Apples color="yellow" number="3" />
        <Pears friend="Peter3" />
      </Bag>
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
