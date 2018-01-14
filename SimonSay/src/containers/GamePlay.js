import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

import ColorButton from "../components/ColorButton";

export default class GamePlay extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;

    input !== targetInput[userInputIndex]
      ? this.props.onGameOver(this.state.score)
      : userInputIndex === targetInput.length - 1
        ? this._toNextLevel(this.state.score + 1)
        : this.setState({
          userInputIndex: userInputIndex + 1
        });
  }

  _randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _toNextLevel = (score) => {
    this.setState({
      score,
      userInputIndex: 0,
      targetInput: this._nextLevel(this.state.targetInput)
    })
  }

  _nextLevel = (targetInput) => {
    return targetInput.concat(this._randomInt(0, 4));
  }

  onLayout(e) {
    const { width, height } = Dimensions.get('window')
    this.setState({
      flag: width > height ? 0 : 1
    });
  }

  componentDidMount() {
    this._toNextLevel(0);
  }

  render() {
    const { width, height } = Dimensions.get("window");
    const gameBoardSize = Math.min(width, height) - 20;
    return (
      <View style={[
        styles.container,
        this.state.flag == 0 ? styles.horizontal : styles.vertical
      ]}
        onLayout={this.onLayout.bind(this)}>
        <View style={[
          setCenterLayout.center,
          styles.container,
        ]}>
          <Text> Simon Say !</Text>
          <Text style={{ fontSize: 30 }}> Score : {this.state.score}</Text>
          <Text>{this.state.targetInput}</Text>
        </View>

        <View style={[
          setCenterLayout.container,
          setCenterLayout.center,
        ]}>
          <View style={{
            width: gameBoardSize,
            height: gameBoardSize
          }}>
            <View style={[styles.container, styles.horizontal]}>
              <ColorButton onPress={() => this._onPress(0)} background="red" />
              <ColorButton onPress={() => this._onPress(1)} background="yellow" />
            </View>
            <View style={[styles.container, styles.horizontal]}>
              <ColorButton onPress={() => this._onPress(2)} background="blue" />
              <ColorButton onPress={() => this._onPress(3)} background="green" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  horizontal: {
    flexDirection: "row"
  },
  vertical: {
    flexDirection: "column"
  }

})

const setCenterLayout = StyleSheet.create({
  center: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 4
  }
})

