/*import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './app/screens/Home';
import Playlist from './app/screens/Playlist';

import * as firebase from 'firebase';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// Initialize Firebase
/*const firebaseConfig = {
  apiKey: "AIzaSyA3xe3RzuXYQwXhyNs7ugy9ccE024CI-qY",
  authDomain: "spotify-bpm-c1846.firebaseapp.com",
  databaseURL: "https://spotify-bpm-c1846.firebaseio.com",
  projectId: "spotify-bpm-c1846",
  storageBucket: "spotify-bpm-c1846.appspot.com",
  messagingSenderId: "576733829516",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);*/

import React from 'react';
import Home from './screens/Home';
import { BPMStack } from './config/router.js';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings([
    "Warning: Failed child context type: Invalid child context",
  ]);

import { Provider } from 'react-redux'
import { store } from 'SpotifyBPM/redux/app-redux';

const App = () => {
  return (
    //<Provider store={store}>
      <BPMStack />
    //</Provider>
  );
};

export default App;
