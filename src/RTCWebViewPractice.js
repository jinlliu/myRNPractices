import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import RTCWebView from './components/nativeComponents/RTCWebView';

export default class WebViewPractice extends Component { 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Android native component test.
        </Text>
        <RTCWebView onScrollChange={this.onWebViewScroll} url="https://www.baidu.com" style={styles.webview}></RTCWebView>
      </View>
    );
  }

  onWebViewScroll = (event)=>{
    console.log(event);
  };
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