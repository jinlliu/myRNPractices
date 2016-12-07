import React,{ PropTypes,Component } from 'react';
import {requireNativeComponent,View} from 'react-native';
  
export default class RTCWebView extends Component { 
  _onChange = (event) => {  
    if (!this.props.onScrollChange) {  
      return;  
    }  
    this.props.onScrollChange({ScrollX:event.nativeEvent.ScrollX,ScrollY:event.nativeEvent.ScrollY});  
  }; 

  render() {  
    return <MyRTCWebView {...this.props} onChange={this._onChange} />;  
  }  
}  

RTCWebView.propTypes = {  
    url: PropTypes.string,  
    html: PropTypes.string,  
    onScrollChange: PropTypes.func,  
    ...View.propTypes, 
};  
  
var MyRTCWebView = requireNativeComponent('MyRTCWebView', RTCWebView,
	{nativeOnly:{  
        'scaleX': true,  
        'scaleY': true,  
        'testID': true,  
        'decomposedMatrix': true,  
        'backgroundColor': true,  
        'accessibilityComponentType': true,  
        'renderToHardwareTextureAndroid': true,  
        'translateY': true,  
        'translateX': true,  
        'accessibilityLabel': true,  
        'accessibilityLiveRegion': true,  
        'importantForAccessibility': true,  
        'rotation': true,  
        'opacity': true,  
        'onLayout': true,  
        'source': true,  
        'javaScriptEnabled': true,  
        'domStorageEnabled': true,  
        'injectedJavaScript': true,  
        'userAgent': true,  
        'onChange': true,  
        }
    });  
module.exports = RTCWebView;