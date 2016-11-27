import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import TabView from './TabView'

export default class LoginView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user:'',
      pwd:''
    };
  }
  onPress = ()=>{ 
    //this.props.navigator.push({name: 'TabView',component: TabView });
    this.props.navigator.resetTo({
      name: 'TabView',
      component: TabView
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name='user-circle' size ={50} style={styles.userIcon}/>
        <TextInput  
            style={styles.userInput}  
            placeholder='QQ/Phone Number/Email' 
            numberOfLines={1}  
            autoFocus={false}  
            underlineColorAndroid={'transparent'}  
            onChangeText={(text) => this.setState({user: text})}  
            textAlignVertical='center'  
            textAlign='center'/>  
        <View style={[styles.container && styles.lineHeight]}/>  
        <TextInput  
            style={styles.passwordInput}  
            placeholder='Password'  
            numberOfLines={1}  
            underlineColorAndroid={'transparent'}  
            onChangeText={(text) => this.setState({pwd: text})}  
            secureTextEntry={true}  
            textAlignVertical='center'  
            textAlign='center'  
        />  

        <View>   
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={this.onPress}>
              <Text style={styles.submitButtonColor}>  
               OK
              </Text>   
            </TouchableOpacity>   
        </View>  

        <View style={styles.containerButton}>  
            <Text style={styles.cannotLoginUserLink}>  
                 Can't login  
            </Text>  
            <Text style={styles.newUserLink}>  
                 New User  
            </Text>  
        </View>  
      </View> 
    );
  }
}

const styles = StyleSheet.create({  
  container:{
    backgroundColor:'#f4f4f4',
    flex:1,
  },
  containerButton:{
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    bottom:10,
  },
  lineHeight:{
    height:1,
  },
  userIcon:{  
    borderRadius:45,  
    height:70,  
    width:70,  
    marginTop:40,  
    alignSelf:'center',  
  },  
  userInput:{  
    backgroundColor:'#fff',  
    marginTop:10,  
    height:45,  
  },  
  passwordInput:{  
    backgroundColor:'#fff',  
    height:45,  
  },   
  submitButton:{  
    marginTop:15,  
    marginLeft:10,  
    marginRight:10,  
    backgroundColor:'#63B8FF',  
    borderColor:'#5bc0de',  
    height:45,  
    borderRadius:5,  
    justifyContent: 'center',  
    alignItems: 'center',  
  }, 
  submitButtonColor:{
    color:'#fff',
  },
  cannotLoginUserLink:{  
    fontSize:15,  
    color:'#63B8FF',  
    marginLeft:10,  
  },  
  newUserLink:{  
    fontSize:15,  
    color:'#63B8FF',  
    marginRight:10,  
    alignItems:'flex-end',  
    flex:1,  
    flexDirection:'row',  
    textAlign:'right',  
  },
});  