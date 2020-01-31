import React from 'react';
import { StatusBar, YellowBox } from 'react-native';


import { StyleSheet, Text, View } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routers from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar borStyle="light-content" backgroundColor="#7D40E7"/>
      <Routers />
    </>
  )
};
