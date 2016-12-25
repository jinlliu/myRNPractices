import React, { Component,PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Tags from './tags_input';
import Hotel from './hotel';
import HotelDetail from './hotel_detail';
import ConstURL from './hackathonConst';

export default class HotelList extends Component {
  constructor(props){
    super(props);
    this.state={
      hotels:[],
      isLoading: true
      }
    this.fetchHotels();
    // this.fetchHotelsByTag = this.fetchHotelsByTag.bind(this);
    // this.onPressHotelSearch =  this.onPressHotelSearch.bind(this);;
  }
  fetchHotels = () =>{
    let that = this;
    const opts={
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    return fetch(ConstURL.BaseUrl+'/clarifai/search/hotelByTags',opts)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      that.setState({hotels:responseJSON});
      that.setState({isLoading:false});
    })
    .catch((error)=>{
      console.error(error);
      that.setState({isLoading:false});
    })
  };

  fetchHotelsByTag = (tags) =>{
    let that = this;
    that.setState({isLoading:true});
    const opts={
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    fetch(ConstURL.BaseUrl+'/clarifai/search/hotelByTags?tags='+tags,opts)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      console.log(responseJSON);
      that.setState({hotels:responseJSON});
      that.setState({isLoading:false});
    })
    .catch((error)=>{
      console.error(error);
      that.setState({isLoading:false});
    })
  };

  onChangeTags  = (e) =>{
    console.log("===onTagChange==")
  };

  onTagPress = (e) =>{
      console.log("===onTagPress==")
  };
  onPressHotelSearch = (tags) =>{
      console.log("===onSearch====");
      this.fetchHotelsByTag(tags);
  };

  render() {
    let loading;
    if(this.state.isLoading){
      loading = (
        <ActivityIndicator style={[styles.centering]}/>
      )
    }
    return (
          <ScrollView>
            <View style={styles.tags}>
              <Tags
                initialText=""
                initialTags={[]}
                onChangeTags= {this.onChangeTags}
                onTagPress={this.onTagPress}
                onPressHotelSearch = {this.onPressHotelSearch}
                />
            </View>
            {loading}
            <View style={styles.hotels}>
            {
              this.state.hotels.map((hotel) => (
              <Hotel hotel={hotel} navigator={this.props.navigator} key={hotel.hotelId}/>
              ))
            }
            </View>
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
  tags:{
    marginTop: 10,
    height: 40,
  },
  hotels:{
    marginLeft: 5,
  }
});
