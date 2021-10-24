/**
 * @flow
 * @format
 */

import React from 'react';

const App = (): any => {
  return (
    <div>
      <h1>Hello2</h1>
    </div>
  );
};

let a = undefined;

function dosome(x: ?string): ?string {
  return x;
}

dosome(a);

export default App;
