import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './routes'
import React from 'react';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}