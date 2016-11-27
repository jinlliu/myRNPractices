import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import DoubanBookDetail from './DoubanBookDetail';

export default class DoubanBook extends Component {
	onPressDetail = ()=> {
	  this.props.navigator.push({
    	title: this.props.book.title,
    	component: DoubanBookDetail,
    	params:{ title: this.props.book.title}
	  });
  }

	render() {
  	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={this.onPressDetail}>
    			<Image source={{uri: this.props.book.image}} style={{width: 120, height: 120}} />
    		</TouchableOpacity>
			<View style={styles.bookRight}>          
			  <Text style={styles.bookName}>{this.props.book.title}</Text>
			</View>
		</View>
  	);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10
  },
  bookRight:{
    marginLeft: 5
  },
  bookName:{
    fontSize: 20,
    fontWeight: 'bold'
  },
});
