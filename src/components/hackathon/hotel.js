import React, { Component,PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import HotelDetail from './hotel_detail';

export default class Hotel extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }
  _onPressHotelPhoto = ()=> {
    this.props.navigator.push({
      title: this.props.hotel.hotelName,
      component: HotelDetail,
      params: this.props
    });
  }


  render() {
    let tagsData = this.props.hotel.tags;
    let tags=[];
    if(tagsData){
      Object.keys(tagsData).forEach(function (key,i) {
          if(i>=6){
            return;
          }
          let score = tagsData[key];
          tags.push(<View style={styles.tag} key={key}><Text style={styles.taglabel}>{key}</Text><View style={styles.score}><Text style={styles.scoreLabel}>{score}</Text></View></View>)
      });
    }
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this._onPressHotelPhoto}>
            <Image source={{uri: this.props.hotel.hotelPhoto}} style={{width: 120, height: 120}} />
          </TouchableOpacity>
        <View style={styles.hotelRight}>
          <Text style={styles.hotelName}>{this.props.hotel.hotelName} {this.props.hotel.hotelId}</Text>
          <View style={styles.tags}>
            {tags}
          </View>
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
  hotelRight:{
    marginLeft: 5
  },
  hotelName:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  tags:{
    flex:1,
    flexDirection:"row",
    width: 300,
    flexWrap:"wrap"
  },
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
    fontWeight:"bold"
  },
  score:{

  },
  scoreLabel:{
    paddingLeft: 8,
    fontSize: 12,
    color:"#ffd318",
    fontWeight:"bold"
  }
});
