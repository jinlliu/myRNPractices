import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import UploadPhoto from './upload_photo';
import Tag from './tag';
import ImageResizer from 'react-native-image-resizer';
import StarRating from 'react-native-star-rating';
import ImagePicker from 'react-native-image-picker';
import ConstURL from './hackathonConst';

var width = Dimensions.get('window').width;

export default class AddComments extends Component {
  constructor(props) {
    super(props);
    this._addPhoto = this._addPhoto.bind(this);
    this._onUpload = this._onUpload.bind(this);
    this._onUploaded = this._onUploaded.bind(this);
    this._onTagSelected = this._onTagSelected.bind(this);
    this._addComment = this._addComment.bind(this);
    this.state = {
      tags:{},
      starCount: 0,
      currentTag:'',
      tagSelted:false,
      uploadPhoto:false
    }
    this.tagRatings=[];
  }
  _addPhoto(){
    var options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response)  => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else{
        const file = {
          uri:  'data:image/jpeg;base64,' + response.data,
          name: 'photo.jpg',
          type: 'image/jpeg',
          isStatic: true
        };
        this._onUpload(file);

      }
    });

    // this.props.navigator.push({
    //   title: "Take Photo",
    //   component: UploadPhoto,
    //   passProps: {_onUpload:this._onUpload,hotel:this.props.hotel,navigator:this.props.navigator}
    // });
  }
  _onUpload(file){
    var that = this;
    ImageResizer.createResizedImage(file.uri, 1024, 1024, "JPEG", 80).then((resizedImageUri) => {

      //Upload file
      let formData = new FormData();
      formData.append('file',{uri:resizedImageUri, type:'application/octet-stream', name:'photo.jpg'});
      let options={};
      options.body = formData;
      options.method='post';
      return fetch(ConstURL.BaseUrl+'/clarifai/rest/upload?htid='+this.props.hotel.hotelId,options)
      .then((response)=>response.json())
      .then((responseJSON)=>{
        that._onUploaded(responseJSON);
      }).catch((err)=>{
        console.log(err);
      })

    }).catch((err) => {
        console.error(err);
    });
  }
  _onUploaded(response){
    console.log(response);
    this.setState({tags:response})
  }
  onStarRatingPress(rating){
    this.tagRatings.push({
      rating:rating,
      tag:this.state.currentTag
    });
    console.log(this.tagRatings);
  }
  _onTagSelected(tagName, selected){
    this.setState({currentTag:tagName,tagSelted:selected});
    console.log(selected);
    console.log(tagName);
  }
  _addComment(){
    console.log("Add Comment");
    var that = this;
    var opts={
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        hotelId:this.props.hotel.hotelId,
        photoUrl: this.state.tags.imageName,
        tagRatings:this.tagRatings
      })
    };
    console.log(opts);
    return fetch(ConstURL.BaseUrl+'/clarifai/rest/submit',opts)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      that.setState({isLoading:false});
      this.props.onCommentAdded();
      this.props.navigator.pop();
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  _renderRating(){
    if(this.state.tagSelted){
      return(<StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'green'}
      />);
    }
  }
  render() {
    let tagsData = this.state.tags.imageTags;
    let tags=[];
    if(tagsData){
      tagsData.forEach((tageName)=>{
        tags.push(<View style={styles.tag}><Tag tagName={tageName} key={tageName} onSelected={this._onTagSelected} currentTag={this.state.currentTag}/></View>);
      })
      };

    let view;
    if(this.state.tags && this.state.tags.imageName){
      view=(<View style={styles.container}>
          <View style={styles.showPhotoContiner}>
            <View style={styles.photo}>
                <Image source={{uri: this.state.tags.imageName}} style={styles.photo} />
            </View>
            <View style={styles.tags}>
              {tags}
            </View>
            <View>
              {this._renderRating()}
            </View>
            <View style={styles.submit}>
              <Icon.Button name="thumbs-o-up" backgroundColor="#c1c1c1" onPress={this._addComment} size={30}>
              </Icon.Button>
            </View>
          </View>
        </View>);
    }else{
      view=(<View style={styles.container}>
          <View style={styles.addPhotoContainer}>
            <View style={styles.addPhoto}>
              <View style={styles.addPhotoBtn}>
                <Icon.Button name="plus" backgroundColor="#c1c1c1" onPress={this._addPhoto} size={50}>
                </Icon.Button>
              </View>
            </View>
          </View>
        </View>);
    }
    return (
      view
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 60,
    padding: 10,
  },
  photo:{
    width:width-20,
    height:width*0.8
  },
  addPhotoContainer:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  addPhoto:{
    width:width*0.9,
    height:150,
    backgroundColor:"#c1c1c1",
    alignItems: "center",
  },
  addPhotoBtn:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  showPhotoContiner:{
    flex: 1,
    alignItems: "center"
  },
  tags:{
    flexDirection: "row",
    flexWrap:"wrap"
  },
  tag:{
    height: 40
  }
});
