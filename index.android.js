/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import CustomButtonPractice from './src/CustomButtonPractice';
import NavigatorPractice from './src/NavigatorPractice';

//comment out following one line to run custom button practice
AppRegistry.registerComponent('myRNPractices', () => CustomButtonPractice);

//comment out following one line to run custom navigator practice
//AppRegistry.registerComponent('myRNPractices', () => NavigatorPractice);
