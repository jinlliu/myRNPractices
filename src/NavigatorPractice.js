import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import WelcomeView from './components/navigator/WelcomeView';
import FeedView from './components/navigator/FeedView';
import DefaultView from './components/navigator/DefaultView';

export default class NavigatorPractice extends Component {
  configureScene(route){
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route,navigator){
    let Component = route.componet;
    this._navigator = navigator;
    switch (route.name){
      case 'welcome':
        Component = WelcomeView;
        break;
      case 'feed':
        Component = FeedView;
        break;
      default:
        Component = DefaultView;
        break;
    }
    return <Component navigator = {navigator}/>
  }

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
      <Navigator initialRoute = {{name: 'welcome'}}
        configureScene = {this.configureScene}
        renderScene = {this.renderScene} />
    );
  }
}