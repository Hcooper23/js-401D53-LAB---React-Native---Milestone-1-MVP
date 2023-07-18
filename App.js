import React from 'react';
import { StatusBar } from 'expo-status-bar';
import App from './src/App';
import Constants from 'expo-constants';

export default function Main() {
  if (Constants.platform.ios) {
    StatusBar.setBarStyle('dark-content');
  } else {
    StatusBar.setBarStyle('light-content');
  }

  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
}
