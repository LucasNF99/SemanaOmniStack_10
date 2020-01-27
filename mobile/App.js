import React from 'react';
import { StatusBar } from 'react-native';


import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
import Routers from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar borStyle="light-content" backgroundColor="#7D40E7"/>
      <Routers />
    </>
  )
};
