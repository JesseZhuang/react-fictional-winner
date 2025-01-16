import './App.css';
import FunctionalComponent, { Example3 } from './component/FunctionalComponent';
import Heading from './component/Heading';
import Bag from './component/Bag';
import Apples from './component/Apples';
import Pears from './component/Pears';
import Card from './Card/Card';

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <FunctionalComponent />
      <Example3 />
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
