import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeView from './HomeView';
import ProfileView from './ProfileView';

export default class TabView extends Component {
  constructor(props) {
    super(props);  
    this.state = {selectedTab:''};
  }

  render() {
    return (
      <View style={styles.container}>  
        <TabNavigator tabBarStyle={styles.tab}>
          <TabNavigator.Item
            title="Home"
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={styles.selectedTitle}            
            renderIcon={() => <Icon name='home' size ={30} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Icon name='home' size ={30} style={styles.tabIcon}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomeView route={this.props.route} navigator={this.props.navigator}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="Profile"
            selected={this.state.selectedTab === 'profile'}
            selectedTitleStyle={styles.selectedTitle}             
            renderIcon={() => <Icon name='rocket' size={30} style ={styles.tabIcon}/>}
            renderSelectedIcon={() => <Icon name='rocket' size={30} style ={styles.tabIcon} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <ProfileView route={this.props.route} navigator={this.props.navigator}/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },    
  tab:{  
    height: 55,  
    alignItems:'center',  
    backgroundColor:'#0072C6',  
    borderColor:'#5bc0de',  
  },  
  tabIcon:{  
    color: '#f4f5f6',
  }, 
  selectedTitle:{
    color:'#333333',
  },
}); 