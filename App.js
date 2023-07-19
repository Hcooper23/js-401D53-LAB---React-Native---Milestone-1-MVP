import React from 'react';
import { StatusBar } from 'expo-status-bar';
import App from './src/utils/App.js';

export default function Main() {
  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
}
