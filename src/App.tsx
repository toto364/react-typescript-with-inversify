import logo from './assets/logo.svg';
import './App.css';
import TYPES, { Warrior } from './services/types';
import { ContainerProvider, useContainer } from './services/containerProvider';

function App() {
  return (
    <ContainerProvider>
      <AComponent />
    </ContainerProvider>
  );
}

const AComponent = () => {
  const container = useContainer()
  const aWarrior = container.get<Warrior>(TYPES.Warrior)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          {aWarrior.fight()}
          {aWarrior.sneak()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
