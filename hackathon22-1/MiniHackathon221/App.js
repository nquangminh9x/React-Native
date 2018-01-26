

import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';



const UNIT = [
  "Metre",
  "Decimeter",
  "Centimetre",
  "Milimeter"
]

export default class App extends PureComponent {
  state = {
    now: 0,
    next: 1,
    Input: 1,
    Output: 10,
  }

  _changeValue = (fromOrTo) => {
    fromOrTo == 'from' ?
      (
        this.setState({
          Output: Math.round(this.state.Input * Math.pow(10, Math.abs(this.state.now - this.state.next)) * 100) / 100
        })
      )
      :
      (
        this.setState({
          Input: Math.round(this.state.Output * Math.pow(10, Math.abs(this.state.now - this.state.next)) * 100) / 100
        })
      )
  }
  _onClick = (i, leftOrRight) => {
    leftOrRight == 'left' ?
      this.setState({
        next: i
      }, this._changeValue('from'))
      :
      this.setState({
        now: i
      }, this._changeValue('from'))
  }
  render() {
    return (
      <View style={styles.stylesAll}>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.styles1}>{UNIT[this.state.now]}</Text>
            <TextInput
              style={[styles.styles1]}
              onChangeText={(text) => this.setState({ Input: text }, this._changeValue('from'))}
              value={'' + this.state.Input}
            />
            <TouchableOpacity style={styles.styles2}
              onPress={() => this._onClick(0, 'right')}>
              <Text style={styles.textColor}>{UNIT[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles3}
              onPress={() => this._onClick(1, 'right')}>
              <Text style={styles.textColor}>{UNIT[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles4}
              onPress={() => this._onClick(2, 'right')}>
              <Text style={styles.textColor}>{UNIT[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles5}
              onPress={() => this._onClick(3, 'right')}>
              <Text style={styles.textColor}>{UNIT[3]}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.styles1}>{UNIT[this.state.next]}</Text>
            <TextInput
              style={styles.styles1}
              onChangeText={(text) => this.setState({ Output: text }, this._changeValue('to'))}
              value={'' + this.state.Output}
            />
            <TouchableOpacity style={styles.styles2}
              onPress={() => this._onClick(0, 'left')}>
              <Text style={styles.textColor}>{UNIT[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles3}
              onPress={() => this._onClick(1, 'left')}>
              <Text style={styles.textColor}>{UNIT[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles4}
              onPress={() => this._onClick(2, 'left')}>
              <Text style={styles.textColor}>{UNIT[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styles5}
              onPress={() => this._onClick(3, 'left')}>
              <Text style={styles.textColor}>{UNIT[3]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styles1: {
    fontSize: 20,
    color: "#FBFAFB",
    backgroundColor: "#533A71",
    paddingLeft: 10
  },
  styles2: {
    backgroundColor: "#624487",
    padding: 10
  },
  styles3: {
    backgroundColor: "#7854A4",
    padding: 10
  },
  styles4: {
    backgroundColor: "#624487",
    padding: 10
  },
  styles5: {
    backgroundColor: "#7854A4",
    padding: 10
  },
  textColor: {
    color: "#FBFAFB",
  },
  stylesAll: {
    flex: 1,
    backgroundColor: "#7854A4"
  },
  row: {
    flexDirection: 'row',
    flex: 1
  }
})