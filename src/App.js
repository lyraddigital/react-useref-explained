import { Card, FlashingInput, NonRenderingCounter, StopWatch } from './components';

import style from './App.module.scss';

function App() {
  return (
    <>
      <header id={style.siteHeader}>
        <h1>The useRef hook explained</h1>
      </header>
      <main id={style.examplesContainer}>
        <Card title="Clicks per 5 seconds">
          <NonRenderingCounter />
        </Card>
        <Card title="Stop Watch">
          <StopWatch />
        </Card>
        <Card title="Flashing Input">
          <FlashingInput />
        </Card>        
      </main>
    </>
  );
}

export default App;
