import React, { Component } from 'react';
import { 
  AppRegistry, 
  CameraRoll, 
  Dimensions, 
  View, 
  StyleSheet,
  FromData } from 'react-native';
  
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageResizer from 'react-native-image-resizer';

export default class CameraApp extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    var that = this;
    this.camera.capture()
      .then((data) => {
        const file = {
          uri: data.path,
          name: 'photo.jpg',
          type: 'image/jpeg'
        };

        console.log(file.uri);
        ImageResizer.createResizedImage(file.uri, 1024, 1024, "JPEG", 80).then((resizedImageUri) => {

          //Upload file
          let formData = new FormData();
          formData.append('file',{uri:resizedImageUri, type:'application/octet-stream', name:'photo.jpg'});
          let options={};
          options.body = formData;
          options.method='post';
          return fetch('http://szepc0cjfe3.sea.corp.expecn.com:8090/clarifai/rest/upload?htid='+this.props.hotel.hotelId,options)
          .then((response)=>response.json())
          .then((responseJSON)=>{
            that.props._onUpload(responseJSON);
            that.props.navigator.pop();
          }).catch((err)=>{
            console.log(err);
            that.props.navigator.pop();
          })

        }).catch((err) => {
            console.error(err);
            that.props.navigator.pop();
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.cameraContainer}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
        />
        <View>
          <Icon.Button name="camera" backgroundColor="#3b5998" onPress={this.takePicture}>
          Take a photo
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width
  },
  cameraContainer: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    backgroundColor: 'salmon'
  }
});
