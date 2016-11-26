import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Button from './components/customButton/Button';

export default class CustomButtonPractice extends Component {
  onRef = () =>{
    this.refs.btnRef.disable();
    this.timer = setTimeout(()=>{
      this.refs.btnRef.enable();
    },3000);
  };

  onPress = (callback)=>{
    this.timer = setTimeout(()=>{
      callback();
    },3000);
  };

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Icon name="rocket" size={30} color="#900" style={styles.icon} />
        <Button text = 'OK' onPress ={this.onPress} />
        <Button ref = 'btnRef' text = 'Ref' onPress ={this.onRef} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    marginTop: 100,
  }
});