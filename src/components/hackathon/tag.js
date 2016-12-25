import React, { Component,PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';


var width = Dimensions.get('window').width;

export default class Tag extends Component {

  constructor(props) {
    super(props)
    this.state={
      selected:false,
      current:false
    }

    // this._onTagSelected = this._onTagSelected.bind(this);
  }

  _onTagSelected = () =>{
    let seleted = this.state.selected? false:true;
    this.setState({
      selected:seleted
    });
    this.props.onSelected(this.props.tagName,seleted);
  };

  render() {
    let seleted = this.state.selected? styles.seleted : styles.tag;
    let current = (this.props.currentTag == this.props.tagName)&&this.state.selected? styles.current : null;
    return (
      <TouchableOpacity onPress={this._onTagSelected}>
          <View style={[seleted,current]}><Text style={styles.taglabel}>{this.props.tagName}</Text></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tag:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#efefef',
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4,
  },
  taglabel:{
    fontSize: 14,
  },
  seleted:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4,
    backgroundColor:"#929292"
  },
  current:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4,
    backgroundColor:"#4cb84f"
  }
});
