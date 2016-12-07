import React, { Component,PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import AddComments from './add_comments';
import Comment from './comment';

var width = Dimensions.get('window').width;

export default class HotelDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state={
      comments:[],
      isLoading:true
    };
    this._addComment = this._addComment.bind(this);
    this._onCommentAdded = this._onCommentAdded.bind(this);
    this.fetchComments();
  }
  fetchComments(){
    var that = this;
    var opts={
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    return fetch('http://localhost:8090/clarifai/search/commentsByHotel?hotelId='+this.props.hotel.hotelId,opts)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      that.setState({comments:responseJSON});
      that.setState({isLoading:false});
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  _onCommentAdded(){
    console.log("Comment Added");
    this.fetchComments();
  }
  _addComment(){
    this.props.navigator.push({
      title: "Add Comments",
      component: AddComments,
      passProps: {hotel:this.props.hotel, navigator:this.props.navigator,onCommentAdded:this._onCommentAdded}
    });
  }

  render() {
    let tagsData = this.props.hotel.tags;
    let tags=[];
    if(tagsData){
      Object.keys(tagsData).forEach(function (key, i) {
          if(i>=6){
            return;
          }
          let score = tagsData[key];
          tags.push(<View style={styles.tag} key={key}><Text style={styles.taglabel}>{key}</Text><View style={styles.score}><Text style={styles.scoreLabel}>{score}</Text></View></View>)
      });
    }
    let loading;
    if(this.state.isLoading){
      loading = (
        <ActivityIndicator style={[styles.centering]}/>
      )
    }
    return (
      <ScrollView>
        <View style={styles.container}>
            <Image source={{uri: this.props.hotel.hotelPhoto}} style={styles.photo} />
          <View style={styles.commentsContainer}>
            <View style={styles.add}>
              <Icon.Button name="plus" borderColor="#cdce69" borderWidth={2} backgroundColor="#ffd63c" borderRadius={5} color="#40552c" onPress={this._addComment}>
                 Add A Comment
              </Icon.Button>
            </View>
            <View style={styles.others}>
              <Text style={styles.say}>Others Say</Text>
            </View>
            <View style={[styles.centering]}>{loading}</View>
            <View style={styles.comments}>
                {
                  this.state.comments.map((comment) => (
                  <Comment comment={comment} hotel={this.props.hotel} navigator={this.props.navigator} key={comment.commentId}/>
                  ))
                }
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  commentsContainer:{
    marginLeft: 0,
  },
  comments:{
    marginLeft: 0,
  },
  photo:{
    width:width-20,
    height:width*0.8
  },
  add:{
    height: 35,
    width:width-20,
    marginTop: 10,
  },
  addBtn:{
  },
  tags:{
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
  },
  centering:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  others:{

  },
  say:{
    fontSize:20,
    fontWeight:"bold"
  }
});
