import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class DoubanBookDetail extends Component {
	goback =()=>{
		const { navigator } = this.props;  
	    if(navigator) {  
	        navigator.pop();  
	    }  
	}
	
	render() {
		return (			
			<View  style={{flex:1}}>  
				<View style={styles.header}>  
					<TouchableOpacity
						onPress={ () => this.goback() }>
						<Icon name='home' size={30} style={styles.header_icon,styles.header_btn}/> 
					</TouchableOpacity>
					<View style={styles.header_center}>
						<Text style={styles.header_title}>{this.props.title}</Text>
					</View> 
				</View>
				<WebView
					ref='webview'
					style={styles.webview}
					source={{uri: 'http://xw.qq.com/m/news/index.htm'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={true}
					scalesPageToFit={true}
				/>
			</View>   
		);
	}
}

const styles = StyleSheet.create({  
    header: {  
        flexDirection: 'row',   
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingTop: 20,  
        height:  68,    
        backgroundColor:'#63B8FF',  
    	borderColor:'#5bc0de',   
        alignItems: 'center',
    },   
	header_center : {
		flex: 1,   
        alignItems: 'center', 
		justifyContent: 'center'
	},
    header_title: {  
		fontSize: 18,
		color: "white"
    },
	header_btn : {
		height: 40,  
        width: 60
	},
    header_icon: {  
        resizeMode: 'stretch'  
    },
	webview : {
	
	}
}); 
