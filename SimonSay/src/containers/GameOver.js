import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends Component {
  state = {  }
  _onPress = ()=> { this.props.changeScreenToGamePlay() } ;
  render() {
    return (
      <View>
      <Text>{this.props.score}</Text>
      <Button onPress = {this._onPress} title = "Play again" />;
      </View>
    );
  }
}

export default GameOver;