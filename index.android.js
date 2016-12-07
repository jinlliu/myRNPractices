/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import CustomButtonPractice from './src/CustomButtonPractice';
import NavigatorPractice from './src/NavigatorPractice';
import TabNavigatorPractice from './src/TabNavigatorPractice';
import VideoViewPractice from './src/VideoViewPractice';
import WebViewPractice from './src/WebViewPractice';
import HackathonPractice from './src/HackathonPractice';

//comment out following one line to run custom button practice
//AppRegistry.registerComponent('myRNPractices', () => CustomButtonPractice);

//comment out following one line to run navigator practice
//AppRegistry.registerComponent('myRNPractices', () => NavigatorPractice);

//comment out following one line to run tab navigator practice
//AppRegistry.registerComponent('myRNPractices', () => TabNavigatorPractice);

//comment out following one line to run native videoview practice
// AppRegistry.registerComponent('myRNPractices', () => VideoViewPractice);

//comment out following one line to run native webview practice
AppRegistry.registerComponent('myRNPractices', () => WebViewPractice);

//comment out following one line to run hackathon practice
//AppRegistry.registerComponent('myRNPractices', () => HackathonPractice);
