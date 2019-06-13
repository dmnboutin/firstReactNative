import React, { Component } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import ball from './assets/ball.png';

const styles = StyleSheet.create({
    ball: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default class Menu extends Component {
    render() {
        return (
            <Image style={styles.ball} source={ball}/>
        );
    }
}