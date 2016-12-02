import React,{ PropTypes }from 'react';
import {requireNativeComponent,View} from 'react-native';
 
var VideoView = {
    name:'VideoView',
    propTypes:{
        style: View.propTypes.style,
        source:PropTypes.shape({
            url:PropTypes.string,
            headers:PropTypes.object,
        }),
        ...View.propTypes,
    }
};
var RCTVideoView = requireNativeComponent('VideoView',VideoView);
module.exports = RCTVideoView;