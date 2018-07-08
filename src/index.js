import React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';

const App = () => {
  return (
    <div>
      <h3>React is live!</h3>
    </div>
  );
};

render(<App />, document.getElementById('app'));
