import React from 'react';
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponent';

function App() {
  return (
    <div>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;
