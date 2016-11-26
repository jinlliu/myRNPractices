import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WelcomeView extends Component{
	goFeed = ()=>{
		this.props.navigator.push({name: 'feed'});
	};
	
	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goFeed} >
                    This is welcome view.Tap to go to feed view.
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
