import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClientCard } from '../.';

const App = () => {
  return (
    <div>
      dddd
      <ClientCard color="danger" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
