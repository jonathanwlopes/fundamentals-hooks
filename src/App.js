import { CounterCallback } from './components/CounterCallback';
import { CounterEffect } from './components/CounterEffect';
import { CounterState } from './components/CounterState';
import { CounterProvider } from './providers/CounterProvider';
import { ReverseContainer } from './components/ReverseContainer';
import { CounterContextImplement } from './components/CounterContextImplement';
import { HookFetch } from './components/HookFetch';

export const App = () => {
  return (
    <CounterProvider>
      <div className="wrapper">
        <h1>Reverse Container</h1>
        <ReverseContainer />
      </div>

      <div className="wrapper">
        <h1>Counter State</h1>
        <CounterState />
      </div>

      <div className="wrapper">
        <h1>Counter Effect</h1>
        <CounterEffect />
      </div>

      <div className="wrapper">
        <h1>Counter Callback</h1>
        <CounterCallback />
      </div>

      <div className="wrapper">
        <h1>Counter Provider</h1>
        <CounterContextImplement />
      </div>

      <div className="wrapper">
        <h1>Hook Fetch</h1>
        <HookFetch />
      </div>
    </CounterProvider>
  );
};
