import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import DoubanBook from './DoubanBook';

export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[],
      isLoading: true
      }
    this.fetchBooks('abc');
  }

  fetchBooks =(query)=>{
    let that = this;
    const opts={
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    return fetch('https://api.douban.com/v2/book/search?q='+query,opts)
      .then((response)=>response.json())
      .then((responseJSON)=>{
        console.log(responseJSON.books);
        that.setState({books:responseJSON.books});
        that.setState({isLoading:false});
      })
      .catch((error)=>{
        console.error(error);
        that.setState({isLoading:false});
      })
  }

  render() {
    let loading;
    if(this.state.isLoading){
      loading = (
        <ActivityIndicator style={[styles.centering]}/>
      )
    }
    return (
      <ScrollView>  
        <View style={styles.header}>  
          <View style={styles.header_center}>
            <Text style={styles.header_title}>Books</Text>
          </View> 
        </View>
        {loading}
        {this.state.books.map(
          (book)=>(
            <DoubanBook book={book} navigator={this.props.navigator} key={book.id}/>
          ))
        }
      </ScrollView>   
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120
  },
  books:{
    marginLeft: 5,
  },
  header: {  
    flexDirection: 'row',    
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingTop: 20,  
    height:  68,    
    backgroundColor:'#63B8FF',  
    borderColor:'#5bc0de',   
    alignItems: 'center'  
  },   
  header_center : {
    flex: 1,   
    alignItems: 'center', 
    justifyContent: 'center'
  },
  header_title: {  
    fontSize: 18,
    color: "white"
  },
});