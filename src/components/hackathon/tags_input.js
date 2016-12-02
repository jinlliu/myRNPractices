import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight ,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tag = ({label,onPress}) => {
  const tag = (
    <View style={[styles.tag]}>
      <Text style={[styles.tagLabel]}
        onPress={onPress.bind(this,label)}>
        {label}
      </Text>
    </View>
  );
  return tag;
};
Tag.propTypes = {
  label: PropTypes.string.isRequired,
};


class Tags extends React.Component {
  constructor(props) {
    super(props);

    const {
      initialTags = [],
      initialText = ' ',
    } = props;
    that = this;
    this.state = {
      tags: initialTags,
      text: initialText,
    };

    this.onChangeText = this.onChangeText.bind(this);
    this._onPressHotelSearch = this._onPressHotelSearch.bind(this);
  }

  onChangeText(text) {
    if (text.length === 0) {
      /* `onKeyPress` isn't currently supported on Android; I've placed an extra
        space character at the start of `TextInput` which is used to determine if the
        user is erasing.
      */
      this.setState({
        tags: this.state.tags.slice(0, -1),
        text: this.state.tags.slice(-1)[0] || ' ',
      }, () => this.props.onChangeTags && this.props.onChangeTags(this.state.tags));
    } else if (
      text.length > 1 &&
      (text.slice(-1) === ' ' || text.slice(-1) === ',')
    ) {
      this.setState({
        tags: [...this.state.tags, text.slice(0, -1).trim()],
        text: ' ',
      }, () => this.props.onChangeTags && this.props.onChangeTags(this.state.tags));
      ;
    } else {
      this.setState({ text });
    }
  }

  _onPressHotelSearch (){
    console.log(that.state.tags);
    this.props.onPressHotelSearch(that.state.tags);
  }

  render() {
    return (
      <View style={[styles.container]}>
        {this.state.tags.map((tag) => (
          <Tag
            label={tag}
            key={tag}
            onPress={this.props.onTagPress}
          />)
        )}
        <View style={[styles.textInputContainer]}>
          <TextInput
            value={this.state.text}
            style={[styles.textInput]}
            onChangeText={this.onChangeText}
            underlineColorAndroid="transparent"
          />
        <TouchableOpacity onPress={this._onPressHotelSearch}>
          <Icon name="ios-search" color="#ffd63c" style={styles.search}/>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Tags.propTypes = {
  initialText: PropTypes.string,
  initialTags: PropTypes.arrayOf(PropTypes.string),
  onChangeTags: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInputContainer: {
    flex: 1,
    width: 100,
    height: 32,
    margin: 4,
    borderRadius: 1,
    backgroundColor: '#f1f1f1',
    borderWidth:2,
    borderColor:"#ffd63c",
    flexDirection: "row"
  },

  textInput: {
    margin: 0,
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    height: 32,
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.87)',
  },

  tag: {
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4,
  },
  tagLabel: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  remove:{
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.87)',
    paddingLeft: 5
  },
  search:{
    fontSize: 25,
  }
});


export { Tag };
export default Tags;
