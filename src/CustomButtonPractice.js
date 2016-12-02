import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Modal
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from './components/customButton/Button';

export default class CustomButtonPractice extends Component {
  constructor(props) {
    super(props);
  
    this.state = {modalVisible:false};
  }

  setModalVisible = (visible) =>{
    this.setState({modalVisible:visible});
  };

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

  onPressLearnMore = ()=>{
    this.setModalVisible(!this.state.modalVisible);
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
        <Icon name='rocket' size={30} color='#900' style={styles.icon} />
        <CustomButton text = 'OK' onPress ={this.onPress} />
        <CustomButton ref = 'btnRef' text = 'Ref' onPress ={this.onRef} />
        <Button onPress={this.onPressLearnMore} style={styles.button}
          title='Show Modal'
          color='#841584'
          accessibilityLabel='Show Modalabout this purple button'
        />
        <View style={styles.horizontal}>
          <ActivityIndicator color='#0000ff' />
          <ActivityIndicator color='#aa00aa' />
          <ActivityIndicator color='#aa3300' />
          <ActivityIndicator color='#00aa00' />
        </View>
        <Modal animationType={'slide'} transparent={false} visible={this.state.modalVisible}
          onRequestClose={()=>{console.log('Modal has been closed')}}>
          <View style={styles.container}>
            <View>
              <Text>Hello World!</Text>
              <Button onPress={()=>{this.setModalVisible(!this.state.modalVisible)}} title='Hide Modal'/>
            </View>
           </View>
        </Modal>
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
    marginTop: 10,
  },
  button: {
    marginTop: 100,
    padding: 50,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});