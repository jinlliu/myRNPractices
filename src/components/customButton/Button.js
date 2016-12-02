/**
 * use TouchableOpacity to custom button component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity 
} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);  
    this.state = {disabled:false};
  }

  onPress = () =>{
    const {onPress}=this.props;
    this.disable();
    onPress(this.enable);
  };

  disable = () =>{
    this.setState({disabled:true});
  };

  enable = () =>{
    this.setState({disabled:false});
  };

  render() {
    return (
      <TouchableOpacity 
        style = {[styles.button,this.state.disabled && styles.disabled]}
        onPress =  {this.onPress}
      >
        <Text style ={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  disabled: {
    backgroundColor: 'gray',
  },
});
