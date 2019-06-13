/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

type Props = {};
export default class CreateAccount extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {login: '', pwd: '', counter: 0};
  }

  render() {
    return (
        <View style={{flex: 8}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <TextInput
                style={{height: 40}}
                placeholder="Login"
                onChangeText={(login) => this.setState({login: login})}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Password"
                onChangeText={(pwd) => this.setState({pwd: pwd})}
            />
            <Text>You entered login / password : {this.state.login} and {this.state.pwd}</Text>
            <Button
                onPress={() => {
                  this.setState(state => ({counter: state.counter + 1}));
                }}
                title='Create'
            />
            <Text>You clicked {this.state.counter} times</Text>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
