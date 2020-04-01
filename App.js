import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import 'react-native-gesture-handler';

import Direction from './router/Direction';

library.add(fab, faCheckSquare, faCoffee)
const App = () => {
  return (
      <Direction/>
  );
};

export default App;
