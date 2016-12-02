import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import HotelList from "./components/hackathon/hotel_list";

export default class HackathonPractice extends Component {
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
        initialRoute={{name: 'HotelList', component: HotelList}}
        configureScene={(route) => Navigator.SceneConfigs.PushFromRight}
        renderScene={(route, navigator) => <route.component {...route.params} navigator={navigator} />} />
    );
  }
}