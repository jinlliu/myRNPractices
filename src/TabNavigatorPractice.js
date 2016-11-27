import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import LoginView from './components/tabnavigator/LoginView';

export default class TabNavigatorPractice extends Component {
  componentDidMount() {
    let navigator = this._navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'LoginView', component: LoginView}}
        configureScene={(route) => Navigator.SceneConfigs.PushFromRight}
        renderScene={(route, navigator) => <route.component {...route.params} navigator={navigator} />} />
    );
  }
}