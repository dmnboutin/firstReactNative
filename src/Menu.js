import React from 'react'
import {AsyncStorage, Button, Image, StyleSheet, Text, View} from 'react-native'
import {navigationPush} from './common';
import ball from '../app/assets/ball.png';
import {USER_KEY} from './config';
import {goToAuth} from './navigation';

export default class Menu extends React.Component {


    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY)
            goToAuth()
        } catch (err) {
            console.log('error signing out...: ', err)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Basket Manager</Text>
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuItem}>
                        <Button onPress={() => {navigationPush('Tactic');}} title="Tactic" />
                    </View>
                    <View style={styles.menuItem}>
                        <Button onPress={() => {navigationPush('Team');}} title="Team" />
                    </View>
                </View>
                <View style={styles.logout}>
                    <Button onPress={this.logout} title="Logout" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderTopRightRadius: 20
    },
    title: {
        flex: 1
    },
    menu: {
        flex: 8,
        margin: 10,
        padding: 10
    },
    logout: {
        flex: 2,
        margin: 10,
        padding: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        margin: 10,
        color: 'white',
    },
    menuItem: {
        width: 180,
        fontSize: 18,
        fontWeight: '500',
        padding: 10
    },

})