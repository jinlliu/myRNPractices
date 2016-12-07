import React,{ PropTypes } from 'react';
import {requireNativeComponent,View} from 'react-native';
  
const webView = {  
  name: 'WebView',  
  propTypes: { 
  	...View.propTypes, 
    url: PropTypes.string,  
    html: PropTypes.string,  
  },  
};  
  
module.exports = requireNativeComponent('MyWebView', webView);