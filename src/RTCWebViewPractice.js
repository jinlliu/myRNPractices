import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import RTCWebView from './components/nativeComponents/RTCWebView';

export default class RTCWebViewPractice extends Component { 
  onWebViewScroll = (event)=>{
    console.log(event);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Android Native Component test.
        </Text>
        <RTCWebView url='https://www.baidu.com' onScrollChange={this.onWebViewScroll} style={styles.webview}></RTCWebView>
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
  webview:{
    width:300,
    height:400,
  }
});