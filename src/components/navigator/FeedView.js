import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FeedView extends Component{
	goDefault = () =>{
		this.props.navigator.push({name:'default'});
	};

	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goDefault} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>  
		)
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
});