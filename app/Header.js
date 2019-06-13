import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Header extends Component {
    render() {
        return (
            <View style={styles.bigBlue}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    Basket Manager
                </Text>
            </View>
        );
    }
}