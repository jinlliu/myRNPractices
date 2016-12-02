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

export default class Comment extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    let tagsData = this.props.comment.tags;
    let tags=[];
    if(tagsData){
      Object.keys(tagsData).forEach(function (key) {
          let score = tagsData[key];
          tags.push(<View style={styles.tag} key={key}><Text style={styles.taglabel}>{key}</Text><View style={styles.score}><Text style={styles.scoreLabel}>{score}</Text></View></View>)
      });
    }
    return (
      <View style={styles.container}>
          <Image source={{uri: this.props.comment.commentPhoto}} style={{width: 80, height: 80}} />
          <View style={styles.tags}>
            {tags}
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
  tags:{
    flexDirection: "row",
    width:320,
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
