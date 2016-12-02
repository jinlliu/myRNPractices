import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import VideoView from './components/nativeComponents/VideoView';

export default class VideoViewPractice extends Component { 
  constructor(props) {
    super(props);  
    this.state = {};
  }
 
  render() {
    return (
      <View style={styles.container}>
        <VideoView
          style={styles.videoView}
          source={
            {
              url:'http://qiubai-video.qiushibaike.com/A14EXG7JQ53PYURP.mp4',
              headers:{
                  'refer':'myRefer'
              }
            }
          }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  videoView:{
    margin:10,
    width:330,
    height:550,
  }
});