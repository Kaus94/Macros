// Import a Library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => (
    <Header headerText={'Dashboard'} />
  );
// render it to the device
AppRegistry.registerComponent('Macros', () => App);
